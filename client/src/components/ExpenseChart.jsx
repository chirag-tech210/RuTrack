import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart = ({ stats }) => {
  if (!stats?.length) return <Typography>No data for chart.</Typography>;
  const data = {
    labels: stats.map(s => s.month),
    datasets: [
      {
        label: 'Total Expenses',
        data: stats.map(s => s.total),
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Expenses' }
    }
  };
  return (
    <Box sx={{ mb: 3 }}>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default ExpenseChart; 