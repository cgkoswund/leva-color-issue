import React from 'react';
import { useControls } from 'leva';

const App = () => {
  useControls({
    color: 'rgb(11,44,99)',
  });
  return (
    <React.StrictMode>
      <div>Hello Hello world...</div>;
    </React.StrictMode>
  );
};

export default App;
