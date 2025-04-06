import React from 'react';
import { createRoot } from 'react-dom/client';
import WorkoutTracker from './WorkoutTracker';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <WorkoutTracker />
  </React.StrictMode>
);