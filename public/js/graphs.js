
// Fetch orders data from backend using AJAX
$.ajax({
  url: 'Orders/api/ordersByDate',  // Use the correct API route
  method: 'GET',
  dataType: 'json',
  success: function (ordersByDates) {
    // Process and use the data here
    const incomesByDate = ordersByDates.map(order => ({
      date: order.date,
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
  console.log(incomesByDate); // Check the received data in the console

  // Your D3.js graph creation code goes here
  // ...

  // This is just a basic example, you need to customize it for your needs
  const graphContainer = document.querySelector('.income-graph');
  const width = 500;
  const height = 500;
  

// Create an SVG element within the container
const svg = d3.select(graphContainer)
  .append('svg')
  .attr('width', width)
  .attr('height', height);

// Define your scales for x and y axes
const xScale = d3.scaleBand()
  .domain(incomesByDate.map(item => item.date))
  .range([0, width])
  .padding(0.1);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(incomesByDate, item => item.totalRevenue)])
  .range([height, 0]);

// Create bars
svg.selectAll('.bar')
  .data(incomesByDate)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', item => xScale(item.date))
  .attr('y', item => yScale(item.totalRevenue))
  .attr('width', xScale.bandwidth())
  .attr('height', item => height - yScale(item.totalRevenue))
  .attr('fill', 'steelblue');

// Add x and y axes
svg.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));

svg.append('g')
  .call(d3.axisLeft(yScale));
}




