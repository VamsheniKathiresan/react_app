//import logo from './logo.svg';
import './App.css';
//import Testcomponent from './components/functional_components/testComponents';
//import TestClassComponent from './components/class_components/testClassComponents';
//import LoginPage from './components/class_components/loginComponent';
//import PropsComponent from './components/functionalComponent/PropsComponent';
//import StateComponent from './components/class_components/stateComponent';
import NavBar from './components/functionalComponent/navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/functionalComponent/about';
import Login from './components/functionalComponent/login';
import Experience from './components/functionalComponent/experience';
import Education from './components/functionalComponent/education';
import Footer from './components/functionalComponent/footer';
import Contact from './components/functionalComponent/contact';
import CopyRight from './components/functionalComponent/copyright';
import Projects from './components/functionalComponent/Projects';
function App()
{
    return(
     <div className="App">
      {/* <PropsComponent name="Vamsheni" course= "ELECTRONICS and COMMUNICATION"/> */}
      <BrowserRouter>
      <NavBar/>
      <Routes>
      
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Education" element={<Education/>}></Route>
      <Route path="/Experience" element={<Experience/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
       <header className="App-header">
         
         
       <login/>
       {/* <StateComponent/> */}
       </header>
       <footer>
       <BrowserRouter><Footer />
      <Routes>
      
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/CopyRight" element={<CopyRight/>}></Route>
      <Route path="/Projects" element={<Projects/>}></Route>
      </Routes></BrowserRouter></footer>
       
     </div>
   );
}

export default App;
