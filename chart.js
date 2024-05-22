document.addEventListener('DOMContentLoaded', function () {
    function createGaugeChart(chartId, gaugeValue, gaugeRange, gaugeSteps, thresholdValue) {
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
                        line: { color: "red", width: 4 },
                        thickness: 0.75,
                        value: thresholdValue
                    }
                }
            }
        ];

        var layout = {
            width: document.getElementById(chartId).clientWidth,
            height: document.getElementById(chartId).clientHeight,
            margin: { t: 0, b: 0 }
        };

        Plotly.newPlot(chartId, data, layout);

        window.addEventListener('resize', function() {
            Plotly.relayout(chartId, {
                width: document.getElementById(chartId).clientWidth,
                height: document.getElementById(chartId).clientHeight
            });
        });
    }

    // Chart 1 configuration
    var gaugeValue1 = 3636;
    var gaugeRange1 = [0, 10000];
    var gaugeSteps1 = [
        { range: [0, gaugeRange1[1] / 3], color: "red" },
        { range: [gaugeRange1[1] / 3, (2 * gaugeRange1[1]) / 3], color: "yellow" },
        { range: [(2 * gaugeRange1[1]) / 3, gaugeRange1[1]], color: "green" }
    ];
    var thresholdValue1 = 6433;
    createGaugeChart('myDiv1', gaugeValue1, gaugeRange1, gaugeSteps1, thresholdValue1);

    // Chart 2 configuration
    var gaugeValue2 = 5000;
    var gaugeRange2 = [0, 15000];
    var gaugeSteps2 = [
        { range: [0, gaugeRange2[1] / 3], color: "blue" },
        { range: [gaugeRange2[1] / 3, (2 * gaugeRange2[1]) / 3], color: "orange" },
        { range: [(2 * gaugeRange2[1]) / 3, gaugeRange2[1]], color: "green" }
    ];
    var thresholdValue2 = 10000;
    createGaugeChart('myDiv2', gaugeValue2, gaugeRange2, gaugeSteps2, thresholdValue2);

    // Chart 3 configuration
    var gaugeValue3 = 7500;
    var gaugeRange3 = [0, 20000];
    var gaugeSteps3 = [
        { range: [0, gaugeRange3[1] / 3], color: "purple" },
        { range: [gaugeRange3[1] / 3, (2 * gaugeRange3[1]) / 3], color: "cyan" },
        { range: [(2 * gaugeRange3[1]) / 3, gaugeRange3[1]], color: "lime" }
    ];
    var thresholdValue3 = 15000;
    createGaugeChart('myDiv3', gaugeValue3, gaugeRange3, gaugeSteps3, thresholdValue3);
});