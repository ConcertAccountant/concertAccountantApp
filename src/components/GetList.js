import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import {firebase} from './Firebase';

const GetList = () => {
    const [createdList, setCreatedList] = useState([]);

    useEffect(() => {
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        onValue(dbRef, (res) => {
            console.log(res)
        })
    })

}

export default GetList;