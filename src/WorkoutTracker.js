import React, { useState } from 'react';
import Input from './components/ui/Input';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import Table from './components/ui/Table';

const gobletSquatImage = '/mnt/data/image.png';

export default function WorkoutTracker() {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([
    // ... same exercise data as before
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...exercises];
    updated[index][field] = value;
    setExercises(updated);
  };

  const filtered = exercises.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.week.toLowerCase().includes(search.toLowerCase()) ||
    e.day.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card style={{ maxWidth: '1000px', margin: '2em auto' }}>
      <h2>Workout Tracker</h2>
      <div style={{ display: 'flex', marginBottom: '1em' }}>
        <Input
          placeholder="Search by week, day, or exercise..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, marginRight: '0.5em' }}
        />
        <Button onClick={() => setSearch('')}>Clear</Button>
      </div>
      <Table border="1" cellPadding="6" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>✔</th>
            <th>Week</th>
            <th>Day</th>
            <th>Exercise</th>
            <th>Reps</th>
            <th>Sets</th>
            <th style={{ width: '80px' }}>Weight</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ex, i) => (
            <React.Fragment key={i}>
              <tr>
                <td><input type="checkbox" /></td>
                <td>{ex.week}</td>
                <td>{ex.day}</td>
                <td>{ex.name}</td>
                <td>{ex.reps}</td>
                <td>{ex.sets}</td>
                <td>
                  <Input
                    style={{ width: '70px' }}
                    value={ex.weight}
                    onChange={e => handleChange(i, 'weight', e.target.value)}
                  />
                </td>
                <td>
                  {ex.link ? (
                    <a href={ex.link} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  ) : (
                    '-'
                  )}
                </td>
              </tr>
              {ex.name === 'Goblet Squat' && ex.image && (
                <tr>
                  <td colSpan="8" style={{ textAlign: 'center' }}>
                    <img src={ex.image} alt="Goblet Squat" style={{ maxWidth: '300px', marginTop: '10px' }} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
