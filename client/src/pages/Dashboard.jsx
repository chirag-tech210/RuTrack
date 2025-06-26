import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box, CircularProgress, Alert } from '@mui/material';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseChart from '../components/ExpenseChart';
import ExpensePieChart from '../components/ExpensePieChart';
import EditExpenseDialog from '../components/EditExpenseDialog';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editExpense, setEditExpense] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [error, setError] = useState('');

  const fetchExpenses = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/expenses', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setExpenses(res.data);
    } catch (err) {
      if (err.response && err.response.status === 401) handleLogout();
      else setError('Failed to fetch expenses');
    }
  };

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/expenses/stats/monthly', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStats(res.data.monthly);
    } catch (err) {
      setError('Failed to fetch stats');
    }
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchExpenses(), fetchStats()]).then(() => setLoading(false));
    // eslint-disable-next-line
  }, []);

  const handleAddExpense = (expense) => {
    setExpenses(prev => [expense, ...prev]);
    fetchStats();
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleEdit = (expense) => {
    setEditExpense(expense);
    setEditOpen(true);
  };

  const handleEditSave = async (updated) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put(`http://localhost:5000/api/expenses/${editExpense._id}`, updated, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setExpenses(prev => prev.map(e => e._id === editExpense._id ? res.data : e));
      setEditOpen(false);
      setEditExpense(null);
      fetchStats();
    } catch (err) {
      setError('Failed to update expense');
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/expenses/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setExpenses(prev => prev.filter(e => e._id !== id));
      fetchStats();
    } catch (err) {
      setError('Failed to delete expense');
    }
  };

  return (
    <Container maxWidth="md" sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <Typography variant="h4" gutterBottom>Expense Dashboard</Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout} sx={{ mb: 2 }}>Logout</Button>
        {error && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>}
        <ExpenseForm onAdd={handleAddExpense} />
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
            <CircularProgress />
          </Box>
        ) : <>
          <Box sx={{ width: '100%', overflowX: 'auto' }}>
            <ExpenseList expenses={expenses} onEdit={handleEdit} onDelete={handleDelete} />
          </Box>
          <Box sx={{ width: '100%' }}>
            <ExpenseChart stats={stats} />
            <ExpensePieChart expenses={expenses} />
          </Box>
          <EditExpenseDialog open={editOpen} expense={editExpense} onClose={() => setEditOpen(false)} onSave={handleEditSave} />
        </>}
      </Box>
    </Container>
  );
};

export default Dashboard; 