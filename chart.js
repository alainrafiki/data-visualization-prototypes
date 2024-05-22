document.addEventListener('DOMContentLoaded', function () {
    // Plot for myDivOne
    // Define the data
    var dataOne = [
        {
            x: [1, 2, 3],
            y: [10, 15, 13],
            type: 'scatter'
        }
    ];
    // Define the layout
    var layoutOne = {
        title: 'First Plot'
    };

    Plotly.newPlot('myDivOne', dataOne, layoutOne);

    // Plot for myDivTwo
    // Define the variables
    var gaugeValue = 120;  // 60% of 200 is 120
    var gaugeRange = [0, 200];
    var gaugeBarColor = "darkblue";
    var gaugeSteps = [
        { range: [0, 40], color: "lightgray" },
        { range: [40, 80], color: "gray" },
        { range: [80, 120], color: "lightgreen" },
        { range: [120, 160], color: "green" },
        { range: [160, 200], color: "darkgreen" }
    ];
    var thresholdLineColor = "red";
    var thresholdLineWidth = 4;
    var thresholdThickness = 0.75;
    var thresholdValue = 160;
    var layoutWidth = 600;
    var layoutHeight = 400;
    var layoutMargin = { t: 0, b: 0 };

    // Define the data
    var dataTwo = [
        {
            type: "indicator",
            mode: "gauge+number",
            value: gaugeValue,
            gauge: {
                axis: { range: gaugeRange },
                bar: { color: gaugeBarColor },
                steps: gaugeSteps,
                threshold: {
                    line: { color: thresholdLineColor, width: thresholdLineWidth },
                    thickness: thresholdThickness,
                    value: thresholdValue
                }
            }
        }
    ];

    // Define the layout
    var layoutTwo = {
        width: layoutWidth,
        height: layoutHeight,
        margin: layoutMargin
    };

    Plotly.newPlot('myDivTwo', dataTwo, layoutTwo);

    // Plot for myDivThree
    // Define the data
    var dataThree = [
        {
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
        }
    ];

    // Define the layout
    var layoutThree = {
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
    Plotly.newPlot('myDivThree', dataThree, layoutThree);
});
