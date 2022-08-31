import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { firebase } from "./Firebase";
import Userlist from "./Userlist";
import { confirmPasswordReset } from "firebase/auth";
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
      for (let key in data) {
        // newArray.push({key:key, value:data[key]});
        // console.log(data[key])
        const budgetNames = data[key];
        // console.log(subData)
        if (key === `${props.user.uid}`) {
          for (let budgetName in budgetNames) {
            const newObject = { budgetName: budgetName };
            const budgetObject = budgetNames[budgetName];
            for (let budgetCost in budgetObject) {
              newObject[budgetCost] = [];
              const arrayOfConcerts = newObject[budgetCost];
              arrayOfConcerts.push(budgetName);
              const listId = budgetObject[budgetCost];
              for (let id in listId) {
                const listDetails = listId[id];
                arrayOfConcerts.push(listId[id]);
                // for (let details in listDetails) {
                //     const currentDetail = listDetails[details];
                //     newBudgetObject[details] = currentDetail;
                // }
              }
            }
            newArray.push(newObject);
          }
        }
      }

      // console.log(newArray)

      // for(let key in newArray){
      //     newerArray.push({key:key, value:newArray[key]})
      // }
      setCreatedList(newArray);
    });
  }, [word]);

  return (
    <>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setWord(props.user.uid);
          }}
          className="listBtn"
        >
          Create List
        </button>
      </div>
      <div>
        {createdList.map((e) => {
          return (
            <div>
              <Link to="/components/SearchResults">Search For An Event</Link>
              <ul>
                <li>
                  <Userlist e={e} />{" "}
                </li>
                <li></li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetPrivateList;
