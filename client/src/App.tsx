import './App.css';
import Tasks from './components/Tasks/Tasks';
import SearchAppBar from './components/UI/navbar';

function App() {
  return (
    <div className='App'>
      <SearchAppBar></SearchAppBar>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Tasks></Tasks>
      </div>
    </div>
  );
}

export default App;
