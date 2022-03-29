import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/ui/Navbar';
import User from './components/user'

function App() {
  return (
    <>
      <Navbar />
      <Dashboard user={User} />
    </>
  );
}

export default App;
