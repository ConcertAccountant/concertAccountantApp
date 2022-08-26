import "./App.scss";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import GetList from "./components/GetList";
import { FaBeer } from 'react-icons/fa';
import Login from "./components/Login";



function App() {
  return(
    <div>
      <Header />
      <Login />
      <SearchResults />
      <GetList />
    </div>
  )
}
export default App;