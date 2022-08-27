import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { firebase } from "./Firebase";

const GetList = () => {
  const [createdList, setCreatedList] = useState([]);

  useEffect(() => {
    const db = getDatabase(firebase);
    const dbRef = ref(db);
    onValue(dbRef, (res) => {
      // console.log(res)
      const newArray = [];
      const data = res.val();
      for (let key in data) {
        newArray.push({ key: key, value: data[key] });
      }
      // console.log(newArray)
      setCreatedList(newArray);
    });
  }, []);

  console.log(createdList);
  //   return (
  //     <div>
  //       <ul>
  //         {createdList.map((eventList) => {
  //           return (
  //             <li key={eventList.key}>
  //               <p>{eventList.value}</p>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </div>
  //   );
};

export default GetList;
