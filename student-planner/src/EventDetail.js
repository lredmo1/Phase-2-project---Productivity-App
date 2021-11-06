

function EventDetail ({eventClick, setEventClick, title, id, start}) {
    
    console.log(eventClick.event)
    const startDate = start.slice(0,10)
    const startTime = start.slice(11,19)
    
    function handleDeleteButtonClick () {
        fetch(`https://proj2-server-app.herokuapp.com/events/${id}`,{
            method: "DELETE",
            headers: { "Content-Type": "application/json"},   
        })
        .then (() => {
            console.log("deleted")
            eventClick.event.remove();
            setEventClick(null)
            //handle deleting
            // const filteredEvents = (id) => events.filter(event => id !== event.id )
            // setEvents(filteredEvents)
        })
    }

    function handleKeepButtonClick () {
        setEventClick(null);
    }

    return(
        <div className="eventDetailClass" id="eventDetail">
            <h4 className="eventDetailClass">Scheduled Event: {title}</h4>
            <p className="eventDetailClass">On: {startDate} </p>
            <p className="eventDetailClass">At: {startTime} (24Hr Clock)</p>
            <button className="eventDetailClass" onClick = {handleKeepButtonClick}>Keep Event</button>
            <button className="eventDetailClass" onClick = {handleDeleteButtonClick}>Delete Event</button>
        </div>
    )
}


export default EventDetail