import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import { useEffect, useState } from "react";
import FormCalendar from "./FormCalendar"
import EventDetail from './EventDetail';


function CalendarWeek() {

    const [events, setEvents] = useState([])
    const [eventClick, setEventClick] = useState(null)

    useEffect(() => {
        fetch(`https://proj2-server-app.herokuapp.com/events`)
            .then((response) => response.json())
            .then((data) => {
                setEvents(data)
            });
    }, []);

    function handleNewCalendarEntry(newEntry) {
        console.log(newEntry)
        setEvents([...events, newEntry]);
    }

    function handleEventClick(e) {
        setEventClick(e)
    }

    return (
        <div className="App">
            <FormCalendar handleNewCalendarEntry={handleNewCalendarEntry} />
            {eventClick ? <EventDetail eventClick={eventClick} setEventClick={setEventClick} title={eventClick.event.title} id={eventClick.event.id} start={eventClick.event.startStr} events = {events} setEvents = {setEvents}/> : null}
            <div id="calendarOnly">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridWeek"
                    customButtons={{
                        new: {
                            text: 'new',
                            click: () => console.log('new event'),
                        },
                    }}
                    headerToolbar={{
                        start: 'title',
                        center: 'dayGridMonth,dayGridWeek,timeGridDay',
                        end: 'today prev,next'
                    }}
                    events={events}
                    nowIndicator
                    editable={true}
                    selectable={true}
                    eventClick={handleEventClick}
                />
            </div>
        </div>
    );
}

export default CalendarWeek