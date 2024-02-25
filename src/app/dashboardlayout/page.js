"use client"
import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts'

const dashboard = () => {

  const [state, setState] = useState({

    series: [{
      name: 'New user',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Old User',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'day',
        categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },



  })
  const [BarState, setBarState] = useState({

    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }

      },
      title: {
        text: 'Monthly Inflation at Scriptly, 2024',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
  })
  const [PiState, setPiState] = useState({

    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  })

  return (
    <div className=" bg-slate-50 ">
      <div>
        <div className=' sm:w-[350px] md:w-[500px] lg:w-[750px] xl:w-[1000px]  mx-auto'>
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="area" height={350} className={"w-full"} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div>
          <div className=' sm:w-[350px] md:w-[400px] lg:w-[350px] xl:w-[500px]  mx-auto'>
            <ReactApexChart
              options={PiState.options}
              series={PiState.series}
              type="donut" height={350} className={"w-full"} />
          </div>
        </div>
        <div>
          <div className=' sm:w-[320px] md:w-[500px] lg:w-[400px] xl:w-[500px]  mx-auto'>
            <ReactApexChart
              options={BarState.options}
              series={BarState.series}
              type="bar" height={350} className={"w-full"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
