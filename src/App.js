import './App.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom'
import Index from './pages/v1'

function App() {

  axios.defaults.baseURL = 'https://todo-api-18-140-52-65.rakamin.com/'
  
  return (
    <Navigate to="/v1" />
  ) 

}

export default App;
