import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from '@mui/material';

const types = ['bank', 'shares', 'cash', 'other'];

const EditExpenseDialog = ({ open, expense, onClose, onSave }) => {
  const [form, setForm] = useState({ type: '', category: '', amount: '', date: '', note: '' });

  useEffect(() => {
    if (expense) {
      setForm({
        type: expense.type || 'bank',
        category: expense.category || '',
        amount: expense.amount || '',
        date: expense.date ? expense.date.slice(0, 10) : '',
        note: expense.note || ''
      });
    }
  }, [expense]);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    onSave({ ...form, amount: Number(form.amount) });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Expense</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField select label="Type" name="type" value={form.type} onChange={handleChange} fullWidth margin="normal">
            {types.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
          </TextField>
          <TextField label="Category" name="category" value={form.category} onChange={handleChange} fullWidth margin="normal" required />
          <TextField label="Amount" name="amount" type="number" value={form.amount} onChange={handleChange} fullWidth margin="normal" required />
          <TextField label="Date" name="date" type="date" value={form.date} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true }} required />
          <TextField label="Note" name="note" value={form.note} onChange={handleChange} fullWidth margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditExpenseDialog; 
 