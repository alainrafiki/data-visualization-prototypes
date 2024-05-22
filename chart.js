document.addEventListener('DOMContentLoaded', function () {
    var gaugeValue = 120;  // 60% of 200 is 120
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

    var data = [
        {
            type: "indicator",
            mode: "gauge+number",
            value: gaugeValue,
            gauge: {
                axis: { range: [0, 200] },
                bar: { color: "darkblue" },
                steps: gaugeSteps,
                threshold: {
                    line: { color: thresholdLineColor, width: thresholdLineWidth },
                    thickness: thresholdThickness,
                    value: thresholdValue
                }
            }
        }
    ];

    var layout = {
        width: layoutWidth,
        height: layoutHeight,
        margin: layoutMargin
    };

    Plotly.newPlot('myDiv', data, layout);
});
