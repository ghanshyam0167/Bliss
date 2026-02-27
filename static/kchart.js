function kcahart(){
    const DATA_COUNT = 8;
    const labels =  ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
    
    const datapoints = [200, 112, 158, 101, 180, 340, NaN];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Calorie',
          data: datapoints,
          borderColor: 'skyblue',
          fill: false,
          cubicInterpolationMode: 'monotone',
          tension: 0.4
        }
      ]
    };
    const config = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Daily calorie burn',
              color: 'skyblue',
              font: {
                  size: 20,
              }
            },
          },
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              display: true,
              ticks: {

                color: 'white',
                font: {
                    size: 16
                }


            },
              title: {
                display: true,
                
              }
            },
            y: {
              display: true,
              suggestedMin: -10,
              suggestedMax: 200,
              ticks: {

                color: '#6D7E8C',
                font: {
                    size: 16
                }


            },
              grid: {
                color: 'white',
                lineWidth: 0.1,

            }
            }
          }
        },
      };
const actions = [
    {
        name: 'Randomize',
        handler(chart) {
            chart.data.datasets.forEach(dataset => {
                dataset.data = Utils.numbers({ count: chart.data.labels.length, min: -100, max: 100 });
            });
            chart.update();
        }
    },
    {
        name: 'Add Dataset',
        handler(chart) {
            const data = chart.data;
            const dsColor = Utils.namedColor(chart.data.datasets.length);
            const newDataset = {
                label: 'Dataset ' + (data.datasets.length + 1),
                backgroundColor: Utils.transparentize(dsColor, 0.5),
                borderColor: dsColor,
                borderWidth: 1,
                data: Utils.numbers({ count: data.labels.length, min: -100, max: 100 }),
            };
            chart.data.datasets.push(newDataset);
            chart.update();
        }
    },
    {
        name: 'Add Data',
        handler(chart) {
            const data = chart.data;
            if (data.datasets.length > 0) {
                data.labels = Utils.months({ count: data.labels.length + 1 });

                for (let index = 0; index < data.datasets.length; ++index) {
                    data.datasets[index].data.push(Utils.rand(-100, 100));
                }

                chart.update();
            }
        }
    },
    {
        name: 'Remove Dataset',
        handler(chart) {
            chart.data.datasets.pop();
            chart.update();
        }
    },
    {
        name: 'Remove Data',
        handler(chart) {
            chart.data.labels.splice(-1, 1); // remove the label first

            chart.data.datasets.forEach(dataset => {
                dataset.data.pop();
            });

            chart.update();
        }
    }
];
const ctx = document.getElementById('kcalchart').getContext('2d');
const chart = new Chart(ctx, config);
}





function stepscrt(){
const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Steps',
            data: [3212, 1212, 4560, 8640, 5766, 2452, null],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(229, 57, 10)',
            barThickness: 10,
            borderRadius: { // Set border radius for each corner
                topLeft: 10,
                topRight: 10,
                bottomLeft: 0,
                bottomRight: 0
            }
        },

    ]
};
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Weekly walk step data',
                color: '#44B78B',
                font: {
                    size: 20,
                }
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#6D7E8C',
                bodyFontSize: 100,
            },
            legend: {
                labels: {
                    font: {
                        size: 16

                    },
                    color: "#44B78B",
                }
            }
        },
        scales: {
            y: {
                ticks: {

                    color: '#6D7E8C',
                    font: {
                        size: 16
                    }


                },
                grid: {
                    color: 'white',
                    lineWidth: 0.1,

                }
            },
            x: {
                ticks: {

                    color: 'white',
                    font: {
                        size: 16
                    }


                },
                grid: {
                    color: 'white',
                    lineWidth: 0,

                }
            },

        }


    },
};
const actions = [
    {
        name: 'Randomize',
        handler(chart) {
            chart.data.datasets.forEach(dataset => {
                dataset.data = Utils.numbers({ count: chart.data.labels.length, min: -100, max: 100 });
            });
            chart.update();
        }
    },
    {
        name: 'Add Dataset',
        handler(chart) {
            const data = chart.data;
            const dsColor = Utils.namedColor(chart.data.datasets.length);
            const newDataset = {
                label: 'Dataset ' + (data.datasets.length + 1),
                backgroundColor: Utils.transparentize(dsColor, 0.5),
                borderColor: dsColor,
                borderWidth: 1,
                data: Utils.numbers({ count: data.labels.length, min: -100, max: 100 }),
            };
            chart.data.datasets.push(newDataset);
            chart.update();
        }
    },
    {
        name: 'Add Data',
        handler(chart) {
            const data = chart.data;
            if (data.datasets.length > 0) {
                data.labels = Utils.months({ count: data.labels.length + 1 });

                for (let index = 0; index < data.datasets.length; ++index) {
                    data.datasets[index].data.push(Utils.rand(-100, 100));
                }

                chart.update();
            }
        }
    },
    {
        name: 'Remove Dataset',
        handler(chart) {
            chart.data.datasets.pop();
            chart.update();
        }
    },
    {
        name: 'Remove Data',
        handler(chart) {
            chart.data.labels.splice(-1, 1); // remove the label first

            chart.data.datasets.forEach(dataset => {
                dataset.data.pop();
            });

            chart.update();
        }
    }
];
const ctx = document.getElementById('stepschart').getContext('2d');
const chart = new Chart(ctx, config);
}