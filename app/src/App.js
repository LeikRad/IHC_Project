import { useRoutes } from 'react-router-dom';

import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home';

import routes from './routes';

const Routes = () => {
  return useRoutes(routes({ noNav: false })); // change to true to hide navbar
};

function App() {
    // <BrowserRouter>

    //   <Navbar />
    //   {/* <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //       <h1 className="text-3xl font-bold underline">
    //         Hello world! (If this is underlined and bold tailwind is working)
    //       </h1>
    //       <button className="btn gap-2">
    //         Inbox
    //         (If this button is blue and has a +99 in purple daisyui is working)
    //         <div className="badge badge-secondary">+99</div>
    //       </button>
    //     </header>
    //   </div> */}
    //   <Routes>
    //     <Route path="/" element={<h1>hoemee</h1>} />
    //     <Route path="/profile" element={<h1>profile</h1>} />
    //   </Routes>
    // </BrowserRouter>

    return <Routes />;
}

export default App;
