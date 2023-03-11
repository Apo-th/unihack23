import axios from "axios";
import { API_URL_SPEND } from ".//constants";
import { useEffect, useState } from "react";
import { Form, Button, Card } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Bar } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
  // Hooks
  const [receipts, setReceipts] = useState(null)
  const merchantMap = new Map();
  const categoryMap = new Map();
  const descriptionMap = new Map();
  const [graphLabels, setLabels] = useState([]);
  const [graphData, setGraphData] = useState([]);

  // GET Request
  const getSpending = () => {
    axios.get(API_URL_SPEND).then(function (response) {
      // Map of categories, merchants and descriptions
      response.data.forEach(element => {
        merchantMap.set(element.merchant, 1);
        categoryMap.set(element.category, 1);
        descriptionMap.set(element.description, element.total_price);
      }
      )

    }
    ).then(() => {
      const arr = [];
      const costs = [];
      descriptionMap.forEach((value, key, map) => {
        arr.push(key);
        costs.push(value);
      });
      setLabels(arr);
      setGraphData(costs);
    })
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
      layout: {
        padding: 20
    },
    },
  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const data = {
    labels: graphLabels,
    datasets: [{
      label: 'My First Dataset',
      data: graphData,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  useEffect(() => {
    getSpending();
  })

  return (
    <Card className="bg-dark text-white graph-card" variant="dark">
      <Card.Title>A glance at your financials:</Card.Title>
      <Card.Body className="graph-body">
        <Bar options={options} data={data} />
      </Card.Body>
    </Card>

  );
}

export default Home;