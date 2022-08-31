import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { firebase } from "./Firebase";
import Userlist from "./Userlist";
import { confirmPasswordReset } from "firebase/auth";

import { Link } from "react-router-dom";

const GetList = (props) => {
  const [createdList, setCreatedList] = useState([]);

  const { word, setWord } = useState([]);

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
      console.log(props.user);

      // console.log(newArray)

      // for(let key in newArray){
      //     newerArray.push({key:key, value:newArray[key]})
      // }
      setCreatedList(newArray);
    });
  }, []);

  return (
    <>
      <div className="publicListHeading">
        <h2>Public List Page</h2>
        <Link to="/components/SearchResults">Return to Search Results</Link>
      </div>

      {createdList.map((e) => {
        return (
          <section>
            <div className="wrapper">
              <div className="publicListContainer">
                <ul className="publicList">
                  <li>
                    <Userlist e={e} />{" "}
                  </li>
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default GetList;
