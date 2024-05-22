document.addEventListener('DOMContentLoaded', function () {
    // Chart 1 configuration
    var gaugeValue1 = 3636;
    var gaugeRange1 = [0, 10000];
    var gaugeSteps1 = [
        { range: [0, gaugeRange1[1] / 3], color: "red" },
        { range: [gaugeRange1[1] / 3, (2 * gaugeRange1[1]) / 3], color: "yellow" },
        { range: [(2 * gaugeRange1[1]) / 3, gaugeRange1[1]], color: "green" }
    ];
    var thresholdValue1 = 6433;

    var data1 = [
        {
            type: "indicator",
            mode: "gauge+number",
            value: gaugeValue1,
            gauge: {
                axis: { range: gaugeRange1 },
                bar: { color: "darkblue" },
                steps: gaugeSteps1,
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: thresholdValue1
                }
            }
        }
    ];

    var layout1 = {
        width: 600,
        height: 400,
        margin: { t: 0, b: 0 }
    };

    Plotly.newPlot('myDiv1', data1, layout1);

    // Chart 2 configuration
    var gaugeValue2 = 5000;
    var gaugeRange2 = [0, 15000];
    var gaugeSteps2 = [
        { range: [0, gaugeRange2[1] / 3], color: "blue" },
        { range: [gaugeRange2[1] / 3, (2 * gaugeRange2[1]) / 3], color: "orange" },
        { range: [(2 * gaugeRange2[1]) / 3, gaugeRange2[1]], color: "green" }
    ];
    var thresholdValue2 = 10000;

    var data2 = [
        {
            type: "indicator",
            mode: "gauge+number",
            value: gaugeValue2,
            gauge: {
                axis: { range: gaugeRange2 },
                bar: { color: "darkblue" },
                steps: gaugeSteps2,
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: thresholdValue2
                }
            }
        }
    ];

    var layout2 = {
        width: 600,
        height: 400,
        margin: { t: 0, b: 0 }
    };

    Plotly.newPlot('myDiv2', data2, layout2);

    // Chart 3 configuration
    var gaugeValue3 = 7500;
    var gaugeRange3 = [0, 20000];
    var gaugeSteps3 = [
        { range: [0, gaugeRange3[1] / 3], color: "purple" },
        { range: [gaugeRange3[1] / 3, (2 * gaugeRange3[1]) / 3], color: "cyan" },
        { range: [(2 * gaugeRange3[1]) / 3, gaugeRange3[1]], color: "lime" }
    ];
    var thresholdValue3 = 15000;

    var data3 = [
        {
            type: "indicator",
            mode: "gauge+number",
            value: gaugeValue3,
            gauge: {
                axis: { range: gaugeRange3 },
                bar: { color: "darkblue" },
                steps: gaugeSteps3,
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: thresholdValue3
                }
            }
        }
    ];

    var layout3 = {
        width: 600,
        height: 400,
        margin: { t: 0, b: 0 }
    };

    Plotly.newPlot('myDiv3', data3, layout3);
});