
// Fetch orders data from backend using AJAX
$.ajax({
  url: 'Orders/api/ordersByDate',  // Use the correct API route
  method: 'GET',
  dataType: 'json',
  success: function (ordersByDates) {
    // Process and use the data here
    const incomesByDate = ordersByDates.map(order => ({
      date: order._id,
      totalPrice: order.totalPrice,
    }));

    createIncomeGraph(incomesByDate);
  },
  error: function (error) {
    console.error('Error fetching orders data:', error);
  }
});

// Rest of the code remains the same...

// Create income graph using D3.js
function createIncomeGraph(incomesByDate) {

  // Your D3.js graph creation code goes here
  // ...

  // This is just a basic example, you need to customize it for your needs
  const graphContainer = document.querySelector('.income-graph');
  const margins = {top: 20, bottom: 30};
  const width = 500;
  const height = 500 - margins.top - margins.bottom;
  
  const maxTotalPrice = 1000;
  const scaleMultiple = maxTotalPrice / height;

// Create an SVG element within the container
const svg = d3.select(graphContainer)
  .append('svg')
  .attr('width', width)
  .attr('height', height + margins.top + margins.bottom);

// Define your scales for x and y axes
const xScale = d3.scaleBand()
  .domain(incomesByDate.map(item => item.date))
  .range([0, width])
  .padding(0.1);


const yScale = d3.scaleLinear()
  .domain([0, d3.max(incomesByDate, item => item.totalPrice * scaleMultiple)])
  .range([height, 0]);


// Create bars
svg.selectAll('.bar')
  .data(incomesByDate)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', item => xScale(item.date))
  .attr('y', item => yScale(item.totalPrice))
  .attr('width', xScale.bandwidth())
  .attr('height', item => height - yScale(item.totalPrice))
  .attr('fill', 'steelblue');

// Add x and y axes
svg.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));

svg.append('g')
  .call(d3.axisLeft(yScale));


  const x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
  const y = d3.scaleLinear().range([height, 0]);
  x.domain(incomesByDate.map((d) => d.date));;
  y.domain([0, d3.max(incomesByDate, (d) => d.totalPrice) + 3])




svg.selectAll('.lable')
.data(incomesByDate)
.enter()
.append('text')
.text((item) => item.totalPrice)
.attr('x', (item) => x(item.date) + x.bandwidth() / 2)
.attr('y', (item) => y(item.totalPrice / scaleMultiple) - 20)
.attr('text-anchor', 'middle')
.classed('lable', true);


}
