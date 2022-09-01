import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import {firebase} from './Firebase';
<<<<<<< HEAD
import UserList from './UserList';
import { confirmPasswordReset } from 'firebase/auth';
import { Link } from "react-router-dom";

const GetPrivateList = (props) => {
    const [createdList, setCreatedList] = useState([]);

    const [word, setWord] = useState("");
=======
import Userlist from './Userlist';
import { useSearchParams } from "react-router-dom";
import Nav from './Nav';
import Header from './Header';

const GetPrivateList = () => {
    const [createdList, setCreatedList] = useState([]);

    const [currentUser, setCurrentUser] = useState('');

    const [searchParams] = useSearchParams();

    useEffect(() => {
        setCurrentUser((searchParams.get("userid")));
      })
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37

    useEffect(() => {
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        onValue(dbRef, (res) => {
            const newArray = [];
<<<<<<< HEAD
            // const newerArray =[];
            const data = res.val();
            // console.log(data)
            for(let key in data){
                // newArray.push({key:key, value:data[key]});
                // console.log(data[key])
                const budgetNames = data[key];
                // console.log(subData)
                if (key === `${props.user.uid}`) { for (let budgetName in budgetNames) {
=======
            const data = res.val();
            for(let key in data){
                const budgetNames = data[key]; 
                if (key === `${currentUser}`) {
                for (let budgetName in budgetNames) {
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
                    const newObject = {budgetName:budgetName};
                    const budgetObject = budgetNames[budgetName];
                    for (let budgetCost in budgetObject) {
                        newObject[budgetCost] = []
                        const arrayOfConcerts = newObject[budgetCost] 
<<<<<<< HEAD
                        arrayOfConcerts.push(budgetName)
                        const listId = budgetObject[budgetCost]
                        for (let id in listId) {
                            const listDetails = listId[id];
=======
                        const listId = budgetObject[budgetCost]
                        for (let id in listId) {
                            const listDetails = listId[id];
                            listDetails.id = id
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
                            arrayOfConcerts.push(listId[id])
                        } 
                    }
                    newArray.push(newObject)
                }}
            }
            setCreatedList(newArray);
        })
<<<<<<< HEAD
    }, [word])

   

    return (
        <>
            <div>
                <button onClick={(e) => {
                    e.preventDefault();    
                    setWord(props.user.uid);
                }}>set
                </button>
            </div>

            {createdList.map((e) => {
                return (
                    <section>
                        <div className="wrapper">
                            <h2>Your Private List</h2>
                            <Link to="/components/SearchResults">Search For An Event</Link>

                            <div className="privateList">
                                <ul>
                                    <li><UserList e={e} /> </li>
=======
    }, [currentUser])

    return (
        <><Nav user={currentUser} /><Header /><h2>Private List Page</h2><div>
            {createdList.map((e) => {
                return (
                    <section>
                        <div className='wrapper'>
                            <div className='publicListContainer'>
                                <ul className='publicList'>
                                    <li key={e.budgetName}>
                                        <Userlist e={e} currentUser={currentUser} />
                                    </li>
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
                                </ul>
                            </div>
                        </div>
                    </section>
<<<<<<< HEAD
                );
            })}
        </>
    )
}



=======

                );
            })}
        </div></>
                
    )
}

>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
export default GetPrivateList;