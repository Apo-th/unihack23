import React, { Component } from "react";
import StudentList from './StudentList';
import axios from "axios";
import { API_URL, API_URL_SPEND } from ".//constants";
import { useState } from "react";
import { Form, Button, Card } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Bar } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
  const [receipts, setReceipts] = useState(null)

  axios.get(API_URL_SPEND).then(function (response) {
    console.log(response.data)
  }
  )

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
    },
  };

  const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul'];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
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


  return (
    <Card className="bg-dark text-white advisor-card" variant="dark">
      <Card.Body>
        <Card.Title>A glance at your financials:</Card.Title>
        <Bar
        options = {options}
          data={data}
       />
      </Card.Body>
    </Card>
  );
}

export default Home;