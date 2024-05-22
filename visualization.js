// Define the data to use here
var targetValue = 2484;
var minValue = 4369;
var maxValue = 8731;

// Define the ranges
var range1 = [minValue, targetValue - 1];
var range2 = [targetValue, targetValue];
var range3 = [targetValue + 1, maxValue];

// Create the trace to show
var trace = {
    x: [range1, range2, range3],
    y: [targetValue, targetValue, targetValue],
    marker: {
        color: ['red', 'gray', 'gray'],
        line: {
            width: 0
        }
    },
    orientation: 'h',
    width: [targetValue - minValue, 1, maxValue - targetValue],
    type: 'bar'
};

// Define the layout
var layout = {
    xaxis: {
        range: [minValue - 100, maxValue + 100],
        tickmode: 'array',
        tickvals: [minValue, targetValue, maxValue],
        ticktext: [minValue, targetValue, maxValue]
    },
    yaxis: {
        visible: false,
        range: [0, 1]
    },
    annotations: [
        {
            x: range1[0],
            y: 0.5,
            xref: 'x',
            yref: 'paper',
            text: 'Less than target chapters',
            showarrow: false,
            font: {
                color: 'red'
            }
        },
        {
            x: range2[0],
            y: 0.5,
            xref: 'x',
            yref: 'paper',
            text: 'ON TRACK',
            showarrow: false,
            font: {
                color: 'gray'
            }
        },
        {
            x: range3[0],
            y: 0.5,
            xref: 'x',
            yref: 'paper',
            text: '522 or More Chapters',
            showarrow: false,
            font: {
                color: 'gray'
            }
        }
    ],
    height: 200,
    margin: {
        l: 100,
        r: 100,
        t: 50,
        b: 50
    }
};

// Create the plot
Plotly.newPlot('myDiv', [trace], layout);
