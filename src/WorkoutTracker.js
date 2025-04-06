import React, { useState } from 'react';
import Input from './components/ui/Input';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import Table from './components/ui/Table';

const gobletSquatImage = '/mnt/data/image.png';

export default function WorkoutTracker() {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([
    { week: 'Week 1', day: 'Day 1 - Upper Body + Core', name: 'Dumbbell Bench Press', reps: '6–8', sets: '4', weight: '', link: 'https://workoutlabs.com/exercise-guide/dumbbell-bench-press/' },
    { week: 'Week 1', day: 'Day 1 - Upper Body + Core', name: 'Bent-Over Row (DB/KB)', reps: '8', sets: '4', weight: '', link: 'https://workoutlabs.com/exercise-guide/dumbbell-bent-over-row/' },
    { week: 'Week 1', day: 'Day 1 - Upper Body + Core', name: 'Overhead Press (DB)', reps: '8', sets: '3', weight: '', link: 'https://workoutlabs.com/exercise-guide/dumbbell-shoulder-press/' },
    { week: 'Week 1', day: 'Day 2 - Lower Body (No Barbell)', name: '20 min warm-up run', reps: '-', sets: '-', weight: '', link: '' },
    { week: 'Week 1', day: 'Day 2 - Lower Body (No Barbell)', name: 'Goblet Squat', reps: '10', sets: '4', weight: '', link: 'https://workoutlabs.com/exercise-guide/goblet-squat/', image: gobletSquatImage },
    { week: 'Week 1', day: 'Day 2 - Lower Body (No Barbell)', name: 'Romanian Deadlift (DB)', reps: '8–10', sets: '3', weight: '', link: 'https://workoutlabs.com/exercise-guide/romanian-deadlift-dumbbells/' },
    { week: 'Week 1', day: 'Day 2 - Lower Body (No Barbell)', name: 'Standing Lunges', reps: '10/leg', sets: '3', weight: '', link: 'https://workoutlabs.com/exercise-guide/dumbbell-lunge/' },
    { week: 'Week 1', day: 'Day 2 - Lower Body (No Barbell)', name: 'Leg Extension', reps: '12–15', sets: '3', weight: '', link: 'https://workoutlabs.com/exercise-guide/leg-extension/' },
    { week: 'Week 1', day: 'Day 2 - Lower Body (No Barbell)', name: 'Inner Thigh Machine', reps: '12–15', sets: '3', weight: '', link: '' },
    { week: 'Week 1', day: 'Day 2 - Lower Body (No Barbell)', name: 'Outer Thigh Machine', reps: '12–15', sets: '3', weight: '', link: '' },
    { week: 'Week 1', day: 'Day 3 - Running + Core', name: 'Run (5–7km) or 6×400m sprints', reps: '-', sets: '-', weight: '', link: '' },
    { week: 'Week 1', day: 'Day 3 - Running + Core', name: 'Plank (front + side)', reps: '45s', sets: '2–3', weight: '', link: 'https://workoutlabs.com/exercise-guide/plank/' },
    { week: 'Week 1', day: 'Day 4 - Full Body Strength', name: 'Dumbbell Deadlift', reps: '5', sets: '4', weight: '', link: 'https://workoutlabs.com/exercise-guide/dumbbell-deadlift/' },
    { week: 'Week 1', day: 'Day 4 - Full Body Strength', name: 'Push Press (DB)', reps: '6', sets: '3', weight: '', link: 'https://workoutlabs.com/exercise-guide/dumbbell-push-press/' },
    { week: 'Week 1', day: 'Day 4 - Full Body Strength', name: 'Kettlebell Swings', reps: '15', sets: '3', weight: '', link: 'https://workoutlabs.com/exercise-guide/kettlebell-swing/' }
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
    <Card style={{ maxWidth: '900px', margin: '2em auto' }}>
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
            <th>Week</th>
            <th>Day</th>
            <th>Exercise</th>
            <th>Reps</th>
            <th>Sets</th>
            <th>Weight</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ex, i) => (
            <React.Fragment key={i}>
              <tr>
                <td>{ex.week}</td>
                <td>{ex.day}</td>
                <td>{ex.name}</td>
                <td>{ex.reps}</td>
                <td>{ex.sets}</td>
                <td>
                  <Input
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
                  <td colSpan="7" style={{ textAlign: 'center' }}>
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
