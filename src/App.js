import './App.css';
import SectionA from './Components/Section A/SectionA';
import SectionB from './Components/Section B/SectionB';
import SectionC from './Components/Section C/SectionC';
import SectionD from './Components/Section D/SectionD';
import SectionE from './Components/Section E/SectionE';
import { AlertProvider } from './Components/Calendar&Modal/AlertContext';

function App() {
  return (
    <AlertProvider>
      <div className="App">
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <SectionE />
      </div>
    </AlertProvider>
    );
}

export default App;
