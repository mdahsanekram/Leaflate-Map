// import React, { useEffect, useRef, useState } from "react";

// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

// // import "@fullcalendar/core/main.css";
// // import "@fullcalendar/daygrid/main.css";
// // import "@fullcalendar/timegrid/main.css";
// import eventss from "../events";


// export default function Clanders() {

//   const [events, setEvents] = useState( []);
//   useEffect(()=>{
//     setEvents(eventss)
//   },[])
//   const calendarComponentRef = useRef();
//   // const handleEventClick = (info) => {
//   //   const newTitle = prompt('Enter new title for the event:', info.event.title);
//   //   if (newTitle) {
//   //     const updatedEvents = events.map((event) => {
//   //       if (event === info.event) {
//   //         return { ...event, title: newTitle };
//   //       }
//   //       return event;
//   //     });
//   //     setEvents(updatedEvents);
//   //   }
//   // };

//   const handleEventClick = (info) => {
//     const title = prompt('Enter new title for the event:', info.event.title);
//     if (title) {
//       const start = prompt('Enter new start date and time (YYYY-MM-DDTHH:MM):', info.event.startStr);
//       const end = prompt('Enter new end date and time (YYYY-MM-DDTHH:MM):', info.event.endStr);
//       if (start ) {
//         const updatedEvents = events.map((event,index) => {
//           console.log(index , info.event)
//           if (index === info.event.id) {
//             console.log(event)
//             return {
//               ...event,
//               title: title,
//               start: start,
//               end: end,
//             };
//           }
//           return event;
//         });
//         setEvents(updatedEvents);
//       }
//     }
//   };
//   // const handleEventClick = (info) => {
//   //   const newTitle = prompt('Enter new title for the event:');
//   //   const newDateTime = prompt('Enter new date and time (YYYY-MM-DD HH:MM):');
//   //   if (newTitle && newDateTime) {
//   //     const [newDate, newTime] = newDateTime.split(' ');
//   //     const [newYear, newMonth, newDay] = newDate.split('-');
//   //     const [newHour, newMinute] = newTime.split(':');
//   //     const newStartDate = new Date(newYear, newMonth - 1, newDay, newHour, newMinute);
      
//   //     // Update the event
//   //     const updatedEvents = events.map((event) => {
//   //       if (event.id === info.event.id) {
//   //         return {
//   //           ...event,
//   //           title: newTitle,
//   //           start: newStartDate.toISOString(),
//   //         };
//   //       }
//   //       return event;
//   //     });
      
//   //     setEvents(updatedEvents);
//   //   }
//   // };
//   const handleDateClick = (info) => {
//     console.log("handleDateClick",info)
//     // Handle date click
//     const title = prompt('Enter event title:');
//     if (title) {
//       const newEvent = { title: title, date: info.dateStr };
//       setEvents([...events, newEvent]); // Add new event to the events array
//     }
//   };
//   return (
//     <div className="App">
//       <FullCalendar
//         // headerToolbar= { {center: 'dayGridMonth,timeGridWeek' }}
//         // views= {
//         // {  dayGridMonth: { // name of view
//         //     titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }
//         //     // other view-specific options here
//         //   }}
//         // }

//         views={{
//           dayGrid: {
//             // options apply to dayGridMonth, dayGridWeek, and dayGridDay views
//             titleFormat: { year: 'numeric', month: 'long' }, // Example option
//             columnHeaderFormat: { weekday: 'long' } // Example option
//           },
//           timeGrid: {
//             // options apply to timeGridWeek and timeGridDay views
//             slotDuration: '00:15:00', // Example option
//             slotLabelInterval: '01:00', // Example option
//           },
//           week: {
//             // options apply to dayGridWeek and timeGridWeek views
//             firstDay: 1, // Example option
//           },
//           day: {
//             // options apply to dayGridDay and timeGridDay views
//             nowIndicator: true, // Example option
//           }
//         }
//         }
//         ref={calendarComponentRef}
//         defaultView="dayGridMonth"
//         header={{
//           left: "prev,next",
//           center: "title",
//           right: "dayGridWeek,dayGridMonth,timeGridWeek,timeGridDay "
//         }}
//         themeSystem="Simplex"
//         plugins={[dayGridPlugin]}
//         events={events}
//         eventClick={console.log("Event")}
//       />
//       <FullCalendar
//         defaultView="dayGridMonth"
//         themeSystem="Simplex"
//         header={{
//           left: "prev,next",
//           center: "title",
//           right: "dayGridMonth,timeGridWeek,timeGridDay",
//         }}
//         plugins={[dayGridPlugin]}
//         events={events}
//         displayEventEnd="true"
//         eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
//         eventClick={handleEventClick}
//         dateClick={handleDateClick}
//       />
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';

// const Canders = () => {
//   const [events, setEvents] = useState([
//     // Initial events
//     { id: '1', title: 'Event 1', date: '2024-02-23' },
//     { id: '2', title: 'Event 2', date: '2024-02-24' },
//     // Add more initial events if needed
//   ]);

//   const handleEventClick = (info) => {
//     // Prompt user for new event information
//     const newTitle = prompt('Enter a new title:', info.event.title);
//     const newDate = prompt('Enter a new date (YYYY-MM-DD):', info.event.startStr);

//     if (newTitle && newDate) {
//       // Find the index of the event to update
//       const eventIndex = events.findIndex((event) =>console.log( event.id , info.event.id));
//       if (eventIndex !== -1) {
//         // Update the event with new information
//         const updatedEvent = {
//           ...info.event,
//           title: newTitle,
//           start: new Date(newDate),
//         };
//         const updatedEvents = [...events];
//         updatedEvents[eventIndex] = updatedEvent;
//         setEvents(updatedEvents);
//       }
//     }
//   };

//   const handleDateClick = (info) => {
//     console.log('Date clicked:', info.dateStr);
//     // Handle date click
//     const title = prompt('Enter event title:');
//     if (title) {
//       const newEvent = {
//         id: Date.now().toString(),
//         title: title,
//         date: info.dateStr,
//       };
//       setEvents([...events, newEvent]);
//     }
//   };

//   return (
//     <FullCalendar
//       // defaultView="dayGridMonth"
//       header={{
//         left: 'prev,next today',
//         center: 'title',
//         right: 'dayGridMonth,timeGridWeek,timeGridDay',
//       }}
//       plugins={[dayGridPlugin]}
//       events={events}
//       eventClick={handleEventClick}
//       dateClick={handleDateClick}
//     />
//   );
// };

import React, { useState } from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import multiMonthPlugin from '@fullcalendar/multimonth'

import { INITIAL_EVENTS, createEventId } from '../events'


function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}


 function Canders() {
  const [weekendsVisible, setWeekendsVisible] = useState(true)
  const [currentEvents, setCurrentEvents] = useState([])

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible)
  }

  function handleDateSelect(selectInfo) {
    let title = prompt('Please enter a new title for your event Ahsan')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  function handleEventClick(clickInfo) {
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    // }
  }

  function handleEvents(events) {
    setCurrentEvents(events)
  }

  return (
    <div className='demo-app-main'>
    <FullCalendar
      plugins={[multiMonthPlugin,dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridYear,dayGridMonth,timeGridWeek,timeGridDay'
      }}
      initialView='multiMonthYear'//multiMonth
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      weekends={weekendsVisible}
      initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
      select={handleDateSelect}
      eventContent={renderEventContent} // custom render function
      eventClick={handleEventClick}
      eventsSet={handleEvents} // called after events are initialized/added/changed/removed
      //  you can update a remote database when these fire:
     
      // eventChange={function(){}}
      // eventRemove={function(){}}
      // 
      eventAdd={function(){
        console.log("Ahsan Ekram")
      }}
    />
     {/* <FullCalendar
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthPlugin]} // Include multiMonthPlugin in the plugins array
      initialView={"multiMonthYear"||"multiMonth"} // Set the initialView to "multiMonth"
      header={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      weekends={true} // Show weekends
      initialEvents={INITIAL_EVENTS}
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      views= {{
        multiMonthFourMonth: {
          type: 'multiMonth',
          duration: { months: 4 }
        }
      }}
      events={[
        // Example events
        { title: 'Event 1', start: '2024-02-01' },
        { title: 'Event 2', start: '2024-02-07' },
        // Add more events as needed
      ]}
    /> */}
  </div>
  )
}

export default Canders;


// https://demo.mobiscroll.com/react/datetime/time-value-steps#