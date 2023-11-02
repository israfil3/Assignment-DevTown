import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default App
