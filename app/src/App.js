import { useRoutes } from 'react-router-dom';

import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home';

import { useUserStore } from './stores/useUserStore';

import routes from './routes';



function App() {
  const {logged_in, is_student} = useUserStore((state) => state);
  console.log(logged_in, is_student);
  return useRoutes(routes({ noNav: false, logged_in, is_student })); // change to true to hide navbar
}

export default App;