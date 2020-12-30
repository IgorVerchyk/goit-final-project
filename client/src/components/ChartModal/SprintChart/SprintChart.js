import { Line, Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.plugins.register({ ChartDataLabels });
// Display labels on data for any type of charts

const SprintChart = () => {
  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'September',
      'October',
      'November',
      'December',
      'January',
      'February',
      'March',
    ],
    datasets: [
      {
        datalabels: {
          color: '#e74d48',
        },
        label: 'Актуальные оставшиеся трудозатраты в часах',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(231, 77, 72 )',
        borderColor: 'rgb(231, 77, 72)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBackgroundColor: 'rgb(231, 77, 72)',
        pointBorderWidth: 1,
        pointRadius: 2,
        pointHitRadius: 10,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        data: [
          226.5,
          207.625,
          188.75,
          169.875,
          151,
          132.125,
          113.25,
          94.375,
          75.5,
          55.625,
          37.75,
          18.875,
          0,
        ],
      },
      {
        datalabels: {
          color: '#3d88e7',
        },
        label: 'Запланированые оставшиеся трудозатраты в часах',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(61, 136, 231)',
        borderColor: 'rgb(61, 136, 231)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBackgroundColor: 'rgb(61, 136, 231)',
        pointBorderWidth: 1,
        pointRadius: 2,
        pointHitRadius: 10,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        data: [
          226.5,
          219.17,
          194.17,
          176.03,
          145.05,
          124.67,
          113.25,
          90.02,
          81.44,
          55.625,
          30.17,
          -2.03,
          -3.03,
        ],
      },
    ],
  };
  const options = {
    legend: {
      labels: { usePointStyle: true, fontColor: '#525252' },
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Человеко-часы',
          },
          ticks: {
            min: 0,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        align: 'top',
      },
    },
    maintainAspectRatio: true,
    responsive: true,
  };
  return <Line data={data} options={options} />;
};

export default SprintChart;
