document.addEventListener('DOMContentLoaded', function () {
    // Placeholder for the first plot (custom gauge-like visualization)
    var totalLength = 100;
    var redSegmentLength = 40;
    var graySegmentMiddleLength = 5;
    var graySegmentRightLength = 55;
    var centerValue = 2484;
    var rangeLabel = "4369-8731 Chapters";

    // Define the layout with shapes and annotations for myDivOne
    var layoutOne = {
        width: 800,
        height: 200,
        shapes: [
            // Red segment
            {
                type: 'rect',
                x0: 0,
                x1: redSegmentLength,
                y0: 0.3,
                y1: 0.7,
                fillcolor: 'red',
                line: {
                    width: 0
                }
            },
            // Middle gray segment
            {
                type: 'rect',
                x0: redSegmentLength,
                x1: redSegmentLength + graySegmentMiddleLength,
                y0: 0.3,
                y1: 0.7,
                fillcolor: 'gray',
                line: {
                    width: 0
                }
            },
            // Right gray segment
            {
                type: 'rect',
                x0: redSegmentLength + graySegmentMiddleLength,
                x1: totalLength,
                y0: 0.3,
                y1: 0.7,
                fillcolor: 'gray',
                line: {
                    width: 0
                }
            }
        ],
        annotations: [
            // Red segment label
            {
                x: redSegmentLength / 2,
                y: 0.8,
                xref: 'x',
                yref: 'paper',
                text: 'Less than target chapters',
                showarrow: false,
                font: {
                    color: 'red'
                }
            },
            // Middle gray segment label
            {
                x: redSegmentLength + (graySegmentMiddleLength / 2),
                y: 0.8,
                xref: 'x',
                yref: 'paper',
                text: 'ON TRACK',
                showarrow: false,
                font: {
                    color: 'gray'
                }
            },
            // Right gray segment label
            {
                x: redSegmentLength + graySegmentMiddleLength + (graySegmentRightLength / 2),
                y: 0.8,
                xref: 'x',
                yref: 'paper',
                text: '522 or More Chapters',
                showarrow: false,
                font: {
                    color: 'gray'
                }
            },
            // Central value
            {
                x: totalLength / 2,
                y: 0.5,
                xref: 'x',
                yref: 'paper',
                text: centerValue.toString(),
                showarrow: false,
                font: {
                    size: 24,
                    color: 'black'
                }
            },
            // Range label
            {
                x: 0,
                y: 1.1,
                xref: 'x',
                yref: 'paper',
                text: rangeLabel,
                showarrow: false,
                font: {
                    color: 'black'
                }
            }
        ],
        xaxis: {
            range: [0, totalLength],
            showgrid: false,
            zeroline: false,
            visible: false
        },
        yaxis: {
            showgrid: false,
            zeroline: false,
            visible: false
        },
        margin: { l: 50, r: 50, t: 50, b: 50 },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)'
    };

    Plotly.newPlot('myDivOne', [], layoutOne);

    // Plot for myDivTwo (gauge chart)
    // Define the variables
    var gaugeValue = 120;  // 60% of 200 is 120
    var gaugeRange = [0, 200];
    var gaugeBarColor = "darkblue";
    var gaugeSteps = [
        { range: [0, 66.67], color: "red" },
        { range: [66.67, 133.33], color: "yellow" },
        { range: [133.33, 200], color: "green" }
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

});
