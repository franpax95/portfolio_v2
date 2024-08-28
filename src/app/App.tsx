import { Sidebar } from './components/Sidebar';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>

      <div className="app__main">
        <div className="app__section">{/** About me */} About me</div>
      </div>
    </div>
  );
}

export default App;
