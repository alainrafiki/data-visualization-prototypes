document.addEventListener('DOMContentLoaded', function () {
    var gaugeValue = 3636;
    var gaugeRange = [0, 10000];
    var gaugeSteps = [
        { range: [0, gaugeRange[1] / 3], color: "red" },
        { range: [gaugeRange[1] / 3, (2 * gaugeRange[1]) / 3], color: "yellow" },
        { range: [(2 * gaugeRange[1]) / 3, gaugeRange[1]], color: "green" }
    ];
    var thresholdLineColor = "red";
    var thresholdLineWidth = 4;
    var thresholdThickness = 0.75;
    var thresholdValue = 6433;
    var layoutWidth = 600;
    var layoutHeight = 400;
    var layoutMargin = { t: 0, b: 0 };

    var data = [
        {
            type: "indicator",
            mode: "gauge+number",
            value: gaugeValue,
            gauge: {
                axis: { range: gaugeRange },
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