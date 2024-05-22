# Data Visualization Prototypes with Plotly

This is a personal project where I am prototyping data visualizations using Plotly. The project includes three interactive speedometer charts displayed on a responsive webpage.

## Features

- Three interactive speedometer charts.
- Responsive design to adapt to different screen sizes.
- Customizable chart data and appearance.

## Technologies Used

- HTML
- CSS
- JavaScript
- Plotly.js

## Getting Started

### Prerequisites

- A web browser to view the HTML file.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/data-visualization-prototypes.git
    ```
2. Navigate to the project directory:
    ```bash
    cd data-visualization-prototypes
    ```

## Usage

1. Open `index.html` in your web browser to view the charts.
    ```bash
    open index.html
    ```
2. Customize the chart data and appearance by modifying `chart.js`.

## File Structure

- `index.html`: The main HTML file containing the structure of the webpage.
- `chart.js`: JavaScript file containing the configuration and creation of the Plotly charts.
- `styles.css`: CSS file for styling the webpage (if applicable).

## Customization

To customize the data and appearance of the charts, modify the relevant sections in `chart.js`. Each chart has its own configuration for values, range, steps, and thresholds.

Example:
```javascript
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
```

## Contributing

This is a personal project, but feel free to fork the repository and submit pull requests if you have improvements or bug fixes.

## License

This project is licensed under the MIT License.

---

Replace `your-username` with your actual GitHub username in the clone URL. This README provides an overview of the project, how to get started, and how to customize the charts.
