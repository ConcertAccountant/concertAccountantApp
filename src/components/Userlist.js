import { useEffect, useState } from "react";
<<<<<<< HEAD
import EventDetails from './EventDetails';
import { getDatabase, push, ref, remove, update } from 'firebase/database';
import {firebase} from './Firebase';

function UserList ({e}, props) {
=======
import EventDetails from "./EventDetails";

function Userlist ({e, currentUser}) {
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37

const [budget, setBudget] = useState("")

const [budgetCosts, setBudgetCosts] = useState([])

useEffect(() => {
    const newArray = [];
    setBudget(e.budgetName)
    for (let key in e) {
        if (key !== "budgetName") {
            const newObject = {}
            newObject.totalBudget = key;
            newObject.concerts = e[key];
			newObject.budgetName = newObject.concerts[0]
            newArray.push(newObject);
        }
    }
    setBudgetCosts(newArray);
}, [e])

// return (
//     <div>
//         {budgetCosts.map((e) => { 
//                 return (
//                     <><h3>{e.concerts[0].budgetname}</h3>
//                     <h4>{e.totalBudget}</h4>
//                     <EventDetails e={e} currentUser={currentUser} /></>
                    
//                 )
//             })}

//     </div>
              

// )

return(
    <>
		{budgetCosts.map((e) => {
			return(
				<>
				{
					e.totalBudget > 500 
					? 
					<>
						<h2>Over $500 Lists</h2>
						<div className="userList">
							<h3 className="listTitle">List name: {e.concerts[0].budgetName}</h3>
							<h4 className="budgetTitle">Budget Set: ${e.totalBudget}</h4>
							<EventDetails e={e}/>
						</div>
					</>
					: 
					<> 
						<h2>Under $500 Lists</h2>
						<div className="userList">
							<h3 className="listTitle">List name: {e.concerts[0].budgetName}</h3>
							<h4 className="budgetTitle">Budget Set: ${e.totalBudget}</h4>
							<EventDetails e={e}/>
						</div>
					</>
		
				}
				</>
			)
		})}
	</>
)

<<<<<<< HEAD

    const handleRemove = () => {
        const database = getDatabase(firebase)
        const dbRef = ref(database, `/${props.currentUser}/${props.name}/${props.budget}`);
        remove(dbRef, props.ticket)
    }

return(
    <>
		{budgetCosts.map((e) => {
			console.log(e)
			return(
				<>
				{
					e.totalBudget > 500 
					? 
					<>
					<h2>Over $500 Lists</h2>
				<div className="userList">
					<h3 className="listTitle">
					List name: {e.budgetName}
					</h3>
					<h4 className="budgetTitle">Budget Set: ${e.totalBudget}</h4>
					<EventDetails e={e}/>
					<button
					
                    onClick={(e) => {
                    e.preventDefault();
                    handleRemove();
                    }}
                    >remove
              
					</button>
				</div>
					
					</>
					: 
					<> 
					<h2>Under $500 Lists</h2>
				<div className="userList">
					<h3 className="listTitle">
					List name: {e.budgetName}
					</h3>
					<h4 className="budgetTitle">Budget Set: ${e.totalBudget}</h4>
					<EventDetails e={e}/>
					<button
					
                    onClick={(e) => {
                    e.preventDefault();
                    handleRemove();
                    }}
                    >remove
              
					</button>
				</div>
					</>
		
				}
				</>
			)
		})}
	</>
)
=======
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
   
}

export default UserList;