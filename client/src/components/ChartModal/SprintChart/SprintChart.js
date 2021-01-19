import { Line, Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import moment from 'moment';

Chart.plugins.register({ ChartDataLabels });
// Display labels on data for any type of charts

const SprintChart = ({ sprint, arr }) => {
  const labels = arr;

  const planTimeSum = sprint.tasks.reduce(
    (acc, task) => task.planTime + acc,
    0,
  );

  const caclRedLineData = duration => {
    const day = 9;
    let initial = duration;
    const planedArr = [initial];
    while (initial) {
      initial = initial - day;
      planedArr.push(initial);
    }
    return planedArr;
  };

  const calcBlueLineData = () => {
    const blueLineData = labels.reduce((acc, label) => {
      const spendTimePerDate = sprint.tasks.reduce((acc, task) => {
        const spendTimePerDatePerTask = task.spendTime.reduce((acc, time) => {
          if (Date.parse(time.data.slice(0, -2)) !== Date.parse(label)) {
            return acc;
          }
          return acc + time.time;
        }, 0);
        return acc + spendTimePerDatePerTask;
      }, 0);
      if (spendTimePerDate === 0) return acc;
      if (acc.length === 0) {
        acc.push(planTimeSum - spendTimePerDate);
      }
      acc.push(acc[acc.length - 1] - spendTimePerDate);
      return acc;
    }, []);
    return blueLineData;
  };

  const data = {
    labels: labels,
    datasets: [
      {
        datalabels: {
          color: '#e74d48',
        },
        label: 'Запланированые оставшиеся трудозатраты в часах',
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
        data: caclRedLineData(sprint.duration),
      },
      {
        datalabels: {
          color: '#3d88e7',
        },
        label: 'Актуальные оставшиеся трудозатраты в часах',
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
        data: calcBlueLineData(),
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
