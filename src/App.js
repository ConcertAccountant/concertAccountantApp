import "./App.scss";
import SearchResults from "./components/SearchResults";
import GetList from "./components/GetList";
import GetPrivateList from "./components/GetPrivateList";
<<<<<<< HEAD
import { FaBeer } from 'react-icons/fa';
import Login from "./components/Login";
import { Link, Routes, Route } from "react-router-dom"

function App({user}) {
  return(
    <div>

      <Header />  
      {/* <Login /> */}


      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/components/SearchResults" element={<SearchResults user={user} />} />
          <Route path="/components/GetList" element={<GetList user={user}/>}/> 
          <Route path="/components/GetPrivateList" element={<GetPrivateList user={user}/> } />
       
      </Routes>  
=======
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";

function App() {
  return(
    <div> 
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SearchResults" element={<SearchResults />} />
          <Route path="/GetList" element={<GetList />}/>
          <Route path="/GetPrivateList" element={<GetPrivateList /> } />
      </Routes>  
    <Footer />
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
    </div>
  )
}
export default App;