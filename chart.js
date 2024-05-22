// Define the data
var data = [{
    x: ['Category 1', 'Category 2', 'Category 3'],
    y: [20, 14, 25],
    type: 'bar'
}];

// Define the layout
var layout = {
    title: 'Simple Bar Chart',
    xaxis: {
        title: 'Categories'
    },
    yaxis: {
        title: 'Values'
    }
};

// Create the plot
Plotly.newPlot('myTopDiv', data, layout);
