import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import {firebase} from './Firebase';
import UserList from './UserList';
import { confirmPasswordReset } from 'firebase/auth';
import { Link } from "react-router-dom";

const GetPrivateList = (props) => {
    const [createdList, setCreatedList] = useState([]);

    const [word, setWord] = useState("");

    useEffect(() => {
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        onValue(dbRef, (res) => {
            const newArray = [];
            // const newerArray =[];
            const data = res.val();
            // console.log(data)
            for(let key in data){
                // newArray.push({key:key, value:data[key]});
                // console.log(data[key])
                const budgetNames = data[key];
                // console.log(subData)
                if (key === `${props.user.uid}`) { for (let budgetName in budgetNames) {
                    const newObject = {budgetName:budgetName};
                    const budgetObject = budgetNames[budgetName];
                    for (let budgetCost in budgetObject) {
                        newObject[budgetCost] = []
                        const arrayOfConcerts = newObject[budgetCost] 
                        arrayOfConcerts.push(budgetName)
                        const listId = budgetObject[budgetCost]
                        for (let id in listId) {
                            const listDetails = listId[id];
                            arrayOfConcerts.push(listId[id])
                        } 
                    }
                    newArray.push(newObject)
                }}
            }
            setCreatedList(newArray);
        })
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
                                </ul>
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    )
}



export default GetPrivateList;