// Define the data
var data = [{
    type: 'pie',
    hole: 0.5,
    values: [75, 25],
    marker: {
        colors: ['green', 'red']
    },
    rotation: 90,
    text: ['Progress', 'Remaining'],
    textinfo: 'text',
    hoverinfo: 'none'
}];

// Define the layout
var layout = {
    title: 'Progress Speedometer',
    showlegend: false,
    height: 400,
    width: 400,
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    annotations: [{
        font: {
            size: 20,
            color: 'black'
        },
        showarrow: false,
        text: 'Target: 100',
        x: 0.5,
        y: 0.5
    }],
    shapes: [{
        type: 'path',
        path: 'M 0.5 0.1 L 0.5 0.9 L 0.9 0.9 A 0.4 0.4 0 0 1 0.5 0.5 Z',
        fillcolor: 'black',
        line: {
            color: 'black'
        }
    }]
};

// Create the plot
Plotly.newPlot('myTopDiv', data, layout);
