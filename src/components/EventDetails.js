function EventDetails ({e}) {
    return (
        <>
            {e.concerts.map((e) => { 
                    return (
                        <div className="eventDetails">
                        <p>{e.min}</p>
                        <p>{e.max}</p>
                        <p>{e.name}</p>
                        </div>                        
                    )
                })}
        </>           
    )   
}

export default EventDetails;