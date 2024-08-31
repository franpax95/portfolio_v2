import { Sidebar } from './components/Sidebar';
import './App.scss';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Recognitions } from './components/Recognitions';

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>

      <div className="app__main">
        <div className="app__section">
          <About />
        </div>

        <div className="app__section">
          <Experience />
        </div>

        <div className="app__section">
          <Projects />
        </div>

        <div className="app__section">
          <Recognitions />
        </div>
      </div>
    </div>
  );
}

export default App;
