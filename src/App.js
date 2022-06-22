import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import Home from './Home'
import About from './About'
import Users from './Users'
// import firebase from './firebase'
import { Route,Switch, BrowserRouter as Router } from 'react-router-dom'
import { ThemeSample } from './components/ThemeSample';
import Sidebar from './Sidebar';
import Emaillist from './Emaillist';
import Header from './Header';
import Compose from './Compose';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {selectSendMessageIsOpen} from './features/mailSlice'
import Emaildetail from './Emaildetail';
function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  console.log(isMessageOpen);
  // React.useEffect(()=>{
  //   const msg=firebase.messaging();
  //   msg.requestPermission().then(()=>{
  //     return msg.getToken();
  //   }).then((data)=>{
  //     console.warn("token",data)
  //   })
  // })

  return (
    // <div className="App">
    //   <Router>
    //     <Navbar bg="primary" variant="dark">
    //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //       <Nav className="mr-auto">
    //         <Nav.Link ><Link to="/">Home</Link></Nav.Link>
    //         <Nav.Link ><Link to="/about" >About</Link></Nav.Link>
    //         <Nav.Link><Link to="/users">Users</Link></Nav.Link>
    //       </Nav>
    //     </Navbar>
    //     {/* <Switch> */}
    //       <Route path="/about" component={About} ></Route>
    //       <Route path="/users" component={Users} ></Route>
    //       <Route path="/" component={Home} ></Route>
    //     {/* </Switch> */}
    //   </Router>
    // </div>
    // <ThemeSample/>
    <Router>
    <div className='App'>
      <Header />

      <div className='app_body'>

        <Sidebar />
        <Switch>
          <Route exact path='/'><Emaillist /></Route>
          <Route path='/mail'><Emaildetail /></Route>
        </Switch>
      </div>
      {
        isMessageOpen && <Compose/>
      }
      
    </div>
    </Router>
  );
}

export default App;
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {ThemeSample} from './components/ThemeSample';
// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <ThemeSample />
//   );
// }

// export default App;
