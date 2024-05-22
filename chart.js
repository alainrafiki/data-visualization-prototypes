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
    // Define the data
    var dataTwo = [
        {
            type: "indicator",
            mode: "gauge+number",
            value: 120,  // 60% of 200 is 120
            gauge: {
                axis: { range: [0, 200] },
                bar: { color: "darkblue" },
                steps: [
                    { range: [0, 40], color: "lightgray" },
                    { range: [40, 80], color: "gray" },
                    { range: [80, 120], color: "lightgreen" },
                    { range: [120, 160], color: "green" },
                    { range: [160, 200], color: "darkgreen" }
                ],
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: 160
                }
            }
        }
    ];

    var layoutTwo = {
        width: 600,
        height: 400,
        margin: { t: 0, b: 0 }
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