import { Sidebar } from './components/Sidebar';
import './App.scss';
import { About } from './components/About';

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>

      <div className="app__main">
        <div className="app__section">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
