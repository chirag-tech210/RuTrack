import React, { useState } from 'react';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import axios from 'axios';

const types = ['bank', 'shares', 'cash', 'other'];

const ExpenseForm = ({ onAdd }) => {
  const [type, setType] = useState('bank');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/expenses', {
        type, category, amount: Number(amount), date, note
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      onAdd(res.data);
      setType('bank'); setCategory(''); setAmount(''); setDate(''); setNote('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add expense');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <Typography variant="h6">Add Expense</Typography>
      <TextField select label="Type" value={type} onChange={e => setType(e.target.value)} fullWidth margin="normal">
        {types.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
      </TextField>
      <TextField label="Category" value={category} onChange={e => setCategory(e.target.value)} fullWidth margin="normal" required />
      <TextField label="Amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} fullWidth margin="normal" required />
      <TextField label="Date" type="date" value={date} onChange={e => setDate(e.target.value)} fullWidth margin="normal" InputLabelProps={{ shrink: true }} required />
      <TextField label="Note" value={note} onChange={e => setNote(e.target.value)} fullWidth margin="normal" />
      {error && <Typography color="error">{error}</Typography>}
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>Add</Button>
    </Box>
  );
};

export default ExpenseForm; 