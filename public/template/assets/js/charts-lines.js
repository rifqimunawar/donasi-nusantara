/**
 * For usage, visit Chart.js docs https://www.chartjs.org/docs/latest/
 */

const lineConfig = {
    type: "line",
    data: {
        labels: ["January", "February", "March", "April"],
        datasets: [
            {
                label: "Total Transaksi",
                backgroundColor: "#0694a2",
                borderColor: "#0694a2",
                data: [
                    jan,
                    feb,
                    mar,
                    apr,
                    mei,
                    jun,
                    jul,
                    ags,
                    sep,
                    okt,
                    nov,
                    des,
                ],
                fill: false,
            },
        ],
    },
    options: {
        responsive: true,
        /**
         * Default legends are ugly and impossible to style.
         * See examples in charts.html to add your own legends
         *  */
        legend: {
            display: true,
        },
        tooltips: {
            mode: "index",
            intersect: false,
        },
        hover: {
            mode: "nearest",
            intersect: true,
        },
        scales: {
            x: {
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Month",
                },
            },
            y: {
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Value",
                },
            },
        },
    },
};
const lineCtx = document.getElementById("line");
window.myLine = new Chart(lineCtx, lineConfig);
