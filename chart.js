document.addEventListener('DOMContentLoaded', function () {
    // Placeholder for the first plot
    // var dataOne = [
    //     {
    //         x: [1, 2, 3],
    //         y: [10, 15, 13],
    //         type: 'scatter'
    //     }
    // ];
    // var layoutOne = {
    //     title: 'First Plot'
    // };
    // Plotly.newPlot('myDivOne', dataOne, layoutOne);

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
});
