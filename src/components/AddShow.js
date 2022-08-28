import { useState } from "react";
import { getDatabase, push, ref, remove, set, update } from "firebase/database";
import { firebase } from "./Firebase";

const AddShow = (props) => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const moreUserSettings = {
    name: props.ticket.name,
    max: props.ticket.max,
<<<<<<< HEAD
    min: props.ticket.min,
  };
=======
    min: props.ticket.min
  }


  console.log(moreUserSettings)
>>>>>>> 5025f8d9cb6aa5e6f87be8602e0f1ea4e1826ac8

  console.log(moreUserSettings);

  const myList = () => {
    // Create a new post reference with an auto-generated id
    const db = getDatabase();
    const postListRef = ref(
      db,
      `/${props.currentUser}/${props.name}/${props.budget}`
    );
    const newPostRef = push(postListRef);
    update(newPostRef, moreUserSettings);
  };

  const handleRemove = () => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    remove(dbRef, props.ticket);
  };

  return (
    <section>
      <div className="wrapper">
        <button
          onClick={(e) => {
            e.preventDefault();
            myList();
          }}
        >
          Save
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleRemove();
          }}>
          remove
        </button>
      </div>
    </section>
  );
};

export default AddShow;
