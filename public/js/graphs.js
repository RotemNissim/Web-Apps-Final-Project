// Fetch orders data from backend
fetch('/Orders/api/OrdersByDate')
   .then(response => response.json())
   .then(ordersByDate => {
     // Process and use the data here

     // Convert the aggregated data into an array of objects
     const incomesByDate = Object.entries(ordersByDate).map(([date, totalRevenue]) => ({
       date,
       totalRevenue,
     }));

     // Create D3.js graph using the extracted income data
     createIncomeGraph(incomesByDate);
   })
   .catch(error => {
     console.error('Error fetching orders data:', error);
   });

// Rest of the code remains the same...

// Create income graph using D3.js
function createIncomeGraph(incomesByDate) {
  // Your D3.js graph creation code goes here
  // ...

  // This is just a basic example, you need to customize it for your needs
  const graphContainer = document.querySelector('.income-graph');
  const width = 800;
  const height = 400;
  

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
