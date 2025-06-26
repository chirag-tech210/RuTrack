import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  if (!expenses.length) return <Typography>No expenses yet.</Typography>;
  return (
    <TableContainer component={Paper} sx={{ mb: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Note</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map(exp => (
            <TableRow key={exp._id}>
              <TableCell>{exp.type}</TableCell>
              <TableCell>{exp.category}</TableCell>
              <TableCell>{exp.amount}</TableCell>
              <TableCell>{new Date(exp.date).toLocaleDateString()}</TableCell>
              <TableCell>{exp.note}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => onEdit(exp)} size="small"><EditIcon /></IconButton>
                <IconButton onClick={() => onDelete(exp._id)} size="small" color="error"><DeleteIcon /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpenseList; 