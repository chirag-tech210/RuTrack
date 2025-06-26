import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const colors = [
  '#1976d2', '#388e3c', '#fbc02d', '#d32f2f', '#7b1fa2', '#0288d1', '#c2185b', '#ffa000'
];

const ExpensePieChart = ({ expenses }) => {
  if (!expenses.length) return <Typography>No data for pie chart.</Typography>;
  // Group by type
  const typeTotals = expenses.reduce((acc, exp) => {
    acc[exp.type] = (acc[exp.type] || 0) + exp.amount;
    return acc;
  }, {});
  const data = {
    labels: Object.keys(typeTotals),
    datasets: [
      {
        data: Object.values(typeTotals),
        backgroundColor: colors.slice(0, Object.keys(typeTotals).length),
      }
    ]
  };
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6">Breakdown by Type</Typography>
      <Pie data={data} />
    </Box>
  );
};

export default ExpensePieChart; 