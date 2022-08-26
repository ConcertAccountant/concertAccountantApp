import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import {firebase} from './Firebase';

const GetList = () => {
    const [createdList, setCreatedList] = useState([]);

    useEffect(() => {
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        onValue(dbRef, (res) => {
            // console.log(res)
            const newArray = [];
            const data = res.val();
            // console.log(data)
            for(let key in data){
                newArray.push({key:key, value:data[key]});
            }

            // const myData = Object.values(newArray)
            // console.log(newArray)
            setCreatedList(newArray);

        })
    }, [])

    // console.log(createdList)
    return(
        <div>
            <ul>
                {createdList.map((eventList) => {
               
                    return(
                        <li key={eventList.key}>
                            <p>{Object.keys(eventList.value)}</p>
                            {/* <p>{eventList.value}</p> */}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GetList;