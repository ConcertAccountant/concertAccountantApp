import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import {firebase} from './Firebase';
<<<<<<< HEAD
import UserList from './UserList';
import { confirmPasswordReset } from 'firebase/auth';
import { Link } from "react-router-dom";
=======
import Userlist from './Userlist';
import { useSearchParams } from "react-router-dom";
import Nav from './Nav';
import Header from './Header';
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37

const GetList = () => {
    const [createdList, setCreatedList] = useState([]);

<<<<<<< HEAD
=======
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
            const data = res.val();
            for(let key in data){
                const budgetNames = data[key];
                for (let budgetName in budgetNames) {
                    const newObject = {budgetName:budgetName};
                    const budgetObject = budgetNames[budgetName];
                    for (let budgetCost in budgetObject) {
                        newObject[budgetCost] = []
                        const arrayOfConcerts = newObject[budgetCost] 
                        arrayOfConcerts.push(budgetName)
                        const listId = budgetObject[budgetCost]
                        for (let id in listId) {
                            const listDetails = listId[id];
                            listDetails.id = id
                            arrayOfConcerts.push(listId[id])
<<<<<<< HEAD

=======
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
                        } 
                    }
                    newArray.push(newObject)
                }
            }
            setCreatedList(newArray);
        })
    }, [])

<<<<<<< HEAD
   

    return (
        <>
                {createdList.map((e) => { 
                    return (
                        <section>
                            <div className="wrapper">
                                <h2>Public List Page</h2> 

                                <Link to="/components/SearchResults">Search For An Event</Link>

                                <div className="publicListContainer" >
                                    <ul className="publicList">
                                        <li>
                                            <UserList e={e} /> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        )
                })}
        </>
=======
    return (
    
        <><Nav user={currentUser} /><Header /><h2>Public List Page</h2><div>
            {createdList.map((e) => {
                return (
                    <section>
                        <div className='wrapper'>
                            <div className='publicListContainer'>
                                <ul className='publicList'>
                                    <li key={e.budgetName}>
                                        <Userlist e={e} currentUser={currentUser} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                );
            })}
        </div></>
                
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
    )
}

export default GetList;