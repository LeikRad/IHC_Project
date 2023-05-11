import { useRoutes } from 'react-router-dom';

import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home';

import { useStudentStore } from './stores/useStudentStore';

import routes from './routes';

const AuthRoutes = () => {
  return useRoutes(routes({ noNav: false, auth: true })); // change to true to hide navbar
};

const UnAuthRoutes = () => {
  return useRoutes(routes({ noNav: false, auth: false })); // change to false to show navbar
};


function App() {
  const logged_in = useStudentStore((state) => state.logged_in);

  console.log(logged_in)
  if (logged_in) {
    console.log("auth")
    return <AuthRoutes />;
  } else if (!logged_in) {
    console.log("unauth")
    return <UnAuthRoutes />;
  } else {
    return <h1>error</h1>;
  }
}

export default App;