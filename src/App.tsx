import { h } from 'preact';
import './App.css';
import { useFadeInApp } from './hooks/useFadeInApp';

function App() {
  const isFadeReady = useFadeInApp();
  return (
    <div className="App" style={{ opacity: isFadeReady ? 1 : 0 }}>
      wee
    </div>
  );
}

export default App;
