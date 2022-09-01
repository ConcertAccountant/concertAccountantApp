import axios from "axios";
import React, { useEffect, useState } from 'react';
import AddShow from "./AddShow";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const SearchResults = () => {
=======
import Header from "./Header";
import Nav from "./Nav";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {

  const [searchParams] = useSearchParams();

  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId((searchParams.get("userid")));
  })

>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
 const [ticket, setTicket] = useState({
    name: "",
    id: "",
    max: "",
    min: "",
    time: "",
    timezone: "",
    address: "",
    url: ""
  })
<<<<<<< HEAD
=======
  
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
  const [data, setData] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [id, setId] = useState('');
<<<<<<< HEAD
  const [track, setTracker] = useState(0);
=======

>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
  const [show, setShow] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false)
  const [name, setName] = useState("");
<<<<<<< HEAD
  const [budget, setBudget] = useState(0);
=======

  const [budget, setBudget] = useState("0");

>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
    //api key
  const key = `0TsZKUciU5HKm4ylnIBkwVoD8U4aPAgY`;
 
    //asynchronous axios call with an await to get our api call when we want
  const getAnswer = async () => {
    await axios({
      url: `https://app.ticketmaster.com/discovery/v2/events`,
      method: "GET",
      dataResponse: "json",
      params: {
        format: "json",
        apikey: key,
        keyword: keyWord,
<<<<<<< HEAD
        size: 20
=======
        size: 50
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
      },
    }).then((response) => {
      const dataTest = response.data._embedded.events;
      console.log(dataTest);
      setData(dataTest);
    }).catch((error) => {
      alert("Please valid enter event")
    });
  } 
  
    //use effect axios call to store our api in the id state
  useEffect(() => {
    axios({
      url: `https://app.ticketmaster.com/discovery/v2/events/${id}`,
      method: "GET",
      dataResponse: "json",
      params: {
        format: "json",
        apikey: key,
      },
    }).then((response) => {
        setTicket({
            name: response.data.name,
            id: response.data.id,
            time: (
                    id === ""
                    ?
                    'n/a'
                    :
                    (
                        new Date(response.data.dates.start.dateTime).toLocaleTimeString("en-IN", {
                        hour: "2-digit",
                        minute: "2-digit",
                        })
                    )
                ),
            timezone: (
                    id === ""
                    ? 
                    'n/a'
                    :
                    (response.data.dates.timezone)
                ),
            address: (
                    id === ""
                    ?
                    'n/a'
                    :
                    (response.data._embedded.venues[0].address.line1)
                ),
            url: (
                    id === ""
                    ?
                    'n/a'
                    :
                    (response.data._embedded.venues[0].url)
                ),
            max: (             
                    response.data.priceRanges === undefined
                    ? 
                    'n/a'
                    :
                    (response.data.priceRanges[0].max)
                ),
            min: (             
                    response.data.priceRanges === undefined
                    ? 
                    'n/a'
                    :
                    (response.data.priceRanges[0].min)
                )
        })
         })
  }, [id]);
  
  //Named function to be called on an event that will display more information on out api call   
  const getMoreInfo = () => {
    return(
        <ul className="subMenu" key={ticket.name}>
<<<<<<< HEAD
            <li><p><span>Address:</span> {ticket.address}</p></li>
            <li><p><span>Timezone:</span> {ticket.timezone}</p></li>
            <li><p><span>Event Time:</span> {ticket.time}</p></li>
=======

            <li ><p>{ticket.address}</p></li>
            <li ><p>{ticket.timezone}</p></li>
            <li ><p>{ticket.time}</p></li>
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
            {
                ticket.url === undefined
                ?
                <li ><p>link not available</p></li>
                :
<<<<<<< HEAD
                <li><a className="ticketLink"href={ticket.url} target="_blank" rel="noreferrer">See Tickets</a></li>
            }
             <AddShow ticket={ticket} name={name} budget={budget}/>
=======
                <li ><a href={ticket.url} target="_blank" rel="noreferrer" className="ticketLink">Get Tickets Here</a></li>
            }
            <AddShow ticket={ticket} name={name} budget={budget} userId={userId}/>
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
        </ul>
      )
  }
    //Named function that will map over our api array and return the relevant search results for our user.
  const renderInfo = () => {
    return data.map((data) => {
      return (
        <section>
            <div className="wrapper">
                <ul className="mainMenu">
                    <li className="container" key={data.id}>
                        <div className="box1">
                            <div className="box2">
                                <img src={data.images[0].url} alt={data.name}/>
                                <h3>{data.name}</h3>
                            </div>
                            <div className="box3">
                                <h3>Date</h3>
                                <p>{data.dates.start.localDate}</p>
                                <h3 className="venueCity">Venue</h3>
                                <p>{data._embedded.venues[0].city.name}</p>
                                <p>{data._embedded.venues[0].name}</p>
                            </div>
                        </div>
                        {/* conditionally rendoring our call to the getmoreinfo function   */}
                        {/* error handle to due to some api calls not containing a price range object */}
                        <div className="box4">
                            <h3>Ticket Costs</h3>
                            {             
                            data.priceRanges === undefined
                            ? 
                            <div>
                                <p>Price Range not available</p>
                            </div>
                            :
                            <div>
                                <p>Currency: {data.priceRanges[0].currency}</p>
                                <p>Minimum: ${Math.round(data.priceRanges[0].min)}</p>
                                <p>Maximum: ${Math.round(data.priceRanges[0].max)}</p>
                            </div> 
                            }        
                        </div>
                        <div className="box5">
                            {/* event listener on our button to send the corresponding id stored in state as well as changing our moreInfo state to true */}
<<<<<<< HEAD
                            <button className="actionButton"
                            onClick={(e) => {
                            e.preventDefault();    
                            setMoreInfo(!moreInfo);
                            setId(data.id)

=======
                            <button className="actionButton" onClick={(e) => {
                            e.preventDefault();    
                            setMoreInfo(!moreInfo);
                            setId(data.id)
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
                            }}
                            >More info
                            </button>
                            {/* passing our addshow component that will handle the removal of adding user selected show into firebase */}
                        </div>
                    </li>
                    <div className="moreInfoDiv">
                      {data.id === ticket.id && moreInfo ? getMoreInfo() : null}
                    </div>
                </ul>
            </div>
        </section>
      )
  })}
    //returning our rendered info named component, calling our getanswer function with our stored promised axios call
  return (
<<<<<<< HEAD
    <div className="App wrapper">
      <ul>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/components/GetList"> View the Public Lists</Link></li>
        <li><Link to="/components/GetPrivateList"> View Your Private Lists</Link></li>

      </ul>
     
      <form>
          <input placeholder="insert list name" type="text" onChange={(e) => { setName(e.target.value)}}></input>
          <input placeholder="insert budget" type="number" onChange ={(e) => { setBudget(e.target.value)}}></input>
          <input value={keyWord} placeholder="Search for an Event" type="text" onChange={(e) => {
              setKeyWord(e.target.value)
              console.log(setKeyWord)
          }} ></input>
          <button 
              className="actionButton"
              onClick={(e) => {
              e.preventDefault()
              setTracker(prevCount => prevCount +1);
              setShow(true);
              getAnswer();
          }}>search</button>
          {show ? renderInfo() : <React.Fragment />}
      </form>
    </div>
=======
    <>
    <Nav user={userId}/>
    <Header />
    <div className="App wrapper" key={data.id}>
      <form className="search">
        <input placeholder="insert list name" type="text" onChange={(e) => { setName(e.target.value); } }></input>
        <input placeholder="insert budget" type="number" onChange={(e) => { setBudget(e.target.value); } }></input>
        <input value={keyWord} placeholder="Search for an Event" type="text" onChange={(e) => {
          setKeyWord(e.target.value);
        } }></input>
        <button className="actionButton" onClick={(e) => {
          e.preventDefault();
          {
            name === "" || budget === "0" || budget === "" || userId === null
              ?
              alert('Please fill out all')
              :
              setShow(true);
          }
          getAnswer();
        } }>search</button>
      </form>
      {show ? renderInfo() : <React.Fragment />}
    </div></>
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
  );
}
export default SearchResults;

