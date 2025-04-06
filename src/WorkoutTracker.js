import React, { useState } from 'react';
import Input from './components/ui/Input';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import Table from './components/ui/Table';

export default function WorkoutTracker() {
  const [exercises, setExercises] = useState([
    { name: 'Dumbbell Bench Press', reps: '', sets: '', weight: '', link: '' }
  ]);
  const [search, setSearch] = useState('');

  const handleChange = (index, field, value) => {
    const updated = [...exercises];
    updated[index][field] = value;
    setExercises(updated);
  };

  const filtered = exercises.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Card style={{ maxWidth: '600px', margin: '2em auto' }}>
      <h2>Workout Tracker</h2>
      <div style={{ display: 'flex', marginBottom: '1em' }}>
        <Input
          placeholder="Search exercises..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, marginRight: '0.5em' }}
        />
        <Button onClick={() => setSearch('')}>Clear</Button>
      </div>
      <Table border="1" cellPadding="6" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Exercise</th><th>Reps</th><th>Sets</th><th>Weight</th><th>Link</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ex, i) => (
            <tr key={i}>
              <td>{ex.name}</td>
              <td><Input value={ex.reps} onChange={e => handleChange(i, 'reps', e.target.value)} /></td>
              <td><Input value={ex.sets} onChange={e => handleChange(i, 'sets', e.target.value)} /></td>
              <td><Input value={ex.weight} onChange={e => handleChange(i, 'weight', e.target.value)} /></td>
              <td><Input value={ex.link} onChange={e => handleChange(i, 'link', e.target.value)} /></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}