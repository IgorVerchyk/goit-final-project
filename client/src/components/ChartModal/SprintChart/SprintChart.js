import { Line, Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import moment from 'moment';

Chart.plugins.register({ ChartDataLabels });
// Display labels on data for any type of charts

const SprintChart = ({ sprint }) => {
  const getDateArray = () => {
    const endDate = new Date(sprint.endDate);
    const startDate = new Date(sprint.startDate);
    var arr = [];
    var dt = new Date(startDate);

    while (dt <= endDate) {
      arr.push(
        new Date(dt).toLocaleString(undefined, {
          month: 'short',
          day: 'numeric',
        }),
      );
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  };

  const labels = getDateArray();

  const planTimeSum = sprint.tasks.reduce(
    (acc, task) => task.planTime + acc,
    0,
  );

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

  const caclRedLineData = () => {
    const arr = labels.reduce((acc, label, labelIndex) => {
      const planedTimeSum = sprint.tasks.reduce((acc, task, index) => {
        if (labelIndex > index) {
          return acc;
        }
        return acc + task.planTime;
      }, 0);

      if (planedTimeSum === 0) return acc;

      if (acc.length === 0) {
        acc.push(planedTimeSum / labels.length);
        return acc;
      }

      acc.push(acc[acc.length - 1] - planedTimeSum / labels.length);
      return acc;
    }, []);
    return arr;
  };

  const data = {
    labels: labels,
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
        data: caclRedLineData(),
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
