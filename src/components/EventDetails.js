<<<<<<< HEAD
import { useEffect, useState } from "react";

function EventDetails({ e }) {
  const [event, setEvent] = useState("");

  const [eventDetails, setEventDetails] = useState([]);

  // useEffect(() => {
  //     const newArray = [];
  //     for (let key in e) {
  //         const newObject = []
  //         newArray.push(e.concerts);
  //     }
  //     setEventDetails(newArray);
  // }, [])

  // // console.log(eventDetails)

  return (
    <div>
      {e.concerts.map((e) => {
        console.log(e);
        return (
          <div>
            <>
              <p>{e.max}</p>
              <p>{e.min}</p>
              <h4>{e.name}</h4>
            </>
          </div>
        );
      })}
    </div>
  );

  // console.log(budgetCosts);
=======
function EventDetails ({e}) {

return (
    <div>
        {e.concerts.map((e) => { 
                return (
                    <div>
                    <><p>{e.max}</p><p>{e.min}</p><h3>{e.name}</h3></>
                    </div>
                )
            })}
    </div>
)
   
>>>>>>> 5025f8d9cb6aa5e6f87be8602e0f1ea4e1826ac8
}

export default EventDetails;
