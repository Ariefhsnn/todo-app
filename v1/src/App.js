import './App.css';
import Index from './pages';
import axios from 'axios';

function App() {

  axios.defaults.baseURL = 'https://todo-api-18-140-52-65.rakamin.com/'
  
  return (
    <Index />
  )
}

export default App;
