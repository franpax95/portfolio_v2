import { Sidebar } from './components/Sidebar';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>

      <div className="app__main">{/** About me */} About me </div>
    </div>
  );
}

export default App;
