const selectcharttype = document.querySelector("#selectcharttype");
const wellchart = document.querySelectorAll(".forwell");

document.addEventListener("DOMContentLoaded", function() {
    var selectElement = selectcharttype;
    selectElement.selectedIndex = 0;
  
    // Triggering change event after setting selectedIndex
    selectElement.dispatchEvent(new Event('change'));
});

selectcharttype.addEventListener("change", function(){
    var selectvalue = this.value;
    if(selectvalue.trim() == 'Screen time1'){
        
        wellchart.forEach(item =>{
            item.style.display = 'none';
        })
        wellchart[0].style.display = 'flex';
            cctime();
        sctime();
    }
    else if(selectvalue.trim() == 'Screen time2'){
        console.log("hello")
    wellchart.forEach(item =>{
        item.style.display = 'none';
    })
    wellchart[1].style.display = 'flex';
        cctime();
    }
    // else if(selectvalue.trim() == 'Screen time3'){
    //     console.log("hello")
    // wellchart.forEach(item =>{
    //     item.style.display = 'none';
    // })
    // wellchart[2].style.display = 'flex';
    //     cctime();
    // }
});


function sctime(){
const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const data = {
  labels: ['Blogs', 'Feeds', 'Mindfulness', 'Books', 'Sports'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [10,40,80,21,65],
      backgroundColor: ['#FFC300', '#DAF7A6 ', '#FF5733', '#34D1BF', '#D1345B'],
    }
  ]
};
    const config = {
        type: 'doughnut',
        data: data,
        options: {
          responsive: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: ['3 hr , 06 min', 'Today'],
              color: '#44B78B', 
              font:{
                size: 20,

              }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        var label = context.label || '';
                        var value = context.parsed || '';
                        if(value<=60){
                            return label + ': ' + value.toLocaleString() + ' min';
                        }
                        else{
                            var hour = Math.round(value/60) ;
                            var min = value%60;
                            return label + ': ' + hour.toLocaleString()+'hr' +" "+ min.toLocaleString() + ' min';

                        }
                    }
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
              dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});
            });
            chart.update();
          }
        },
        {
          name: 'Add Dataset',
          handler(chart) {
            const data = chart.data;
            const newDataset = {
              label: 'Dataset ' + (data.datasets.length + 1),
              backgroundColor: [],
              data: [],
            };
      
            for (let i = 0; i < data.labels.length; i++) {
              newDataset.data.push(Utils.numbers({count: 1, min: 0, max: 100}));
      
              const colorIndex = i % Object.keys(Utils.CHART_COLORS).length;
              newDataset.backgroundColor.push(Object.values(Utils.CHART_COLORS)[colorIndex]);
            }
      
            chart.data.datasets.push(newDataset);
            chart.update();
          }
        },
        {
          name: 'Add Data',
          handler(chart) {
            const data = chart.data;
            if (data.datasets.length > 0) {
              data.labels.push('data #' + (data.labels.length + 1));
      
              for (let index = 0; index < data.datasets.length; ++index) {
                data.datasets[index].data.push(Utils.rand(0, 100));
              }
      
              chart.update();
            }
          }
        },
        {
          name: 'Hide(0)',
          handler(chart) {
            chart.hide(0);
          }
        },
        {
          name: 'Show(0)',
          handler(chart) {
            chart.show(0);
          }
        },
        {
          name: 'Hide (0, 1)',
          handler(chart) {
            chart.hide(0, 1);
          }
        },
        {
          name: 'Show (0, 1)',
          handler(chart) {
            chart.show(0, 1);
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
const ctx = document.getElementById('wellchart').getContext('2d');
const chart = new Chart(ctx, config);

}

function cctime(){
    const DATA_COUNT = 7;
    
    const labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Time',
                data: [3, 4, 4, 5, 2, 1, 2],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: '#3454D1',
                barThickness: 15,
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
                    text: ['3 hr, 06 min', "Today"],
                    color: '#44B78B',
                    font: {
                        size: 20,
                    }
                },
               
                legend: {
                    labels: {
                        font: {
                            size: 16
    
                        },
                        color: "#44B78B",
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: '#6D7E8C',
                    bodyFontSize: 100,
                    callbacks: {
                        label: function(context) {
                            var label = context.label || '';
                            var value = context.parsed.data || '';
                            return label + ': ' + context.raw + ' hr';
                        }
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
    const ctx = document.getElementById('wellchart2').getContext('2d');
    const chart = new Chart(ctx, config);
    }
