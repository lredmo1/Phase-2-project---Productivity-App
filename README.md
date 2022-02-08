# Phase-2-project---Productivity-App

# Project Title: 
    Productivity Planner - Flatiron Software Engineering Phase Two Project


# Project Owners: 
    1. Lisa Primeaux-Redmond 
        - GitHub userName: lredmo1 
    2. Oluwayemisi Soremekun 
        - GitHub userName: Oluwayemisi-s

# Reason for the project: 
    We built this project to apply and showcase the knowledge and skills we have acquired during phase two of our software engineering course at Flatiron school (class of 09/21). These skills are demonstrated in our use of JavaScript and React functional components, using React states to manage and manipulate dynamically changing events on the DOM, setting and using controlled forms that persist data to the database, and the use of CSS to design our webpage, amongst others.

# Motivation for the project: 
    As partners we agreed that time management and staying organized have been vital to success in our studies. Some of the things that have been most important to us during our course at Flatiron school are a calendar, to save scheduled events, and sticky notes, to keep important reminders at the top of our minds and which are currently scattered all over our work area.

    This inspired us to build a single page app that can house a calendar, our to-do lists, and other miscellaneous lists at a glance. We thought to further spice things by adding some inspirational contents that are right at the top of the page and will help get the day started on a good note!

    We were greatly inspired by Google Calendar and some other to-do list applications. While we cannot fully mirror these great apps, we believe that we incorporated some of their best features into our own custom application. 

# Project Description: 
    Our application is divided into a several sections, as detailed below:

    Header:
    This section shows our page title and houses the page jump navigation links to other sections on our webpage such as the focus, calendar, and to-do lists section. It also features a clickable login button that can be used to set up login functionality at a later iteration.

    Focus:
    The Focus section displays a form for a daily focus and gratitude entry. While intended for daily use, these inputs can be changed as often as the user likes by clicking on the button at the bottom of the section, which changes the view to a form. In this view, the user can input new values for focus and gratitude, or the button at the bottom of the section can be clicked again to hide the form and display any previous contents. When the form is filled and completed, a PATCH request is made to our restful API, and the display content is updated to the user's most recent entry.

    Calendar:
    Our calendar section uses an external calendar library: FullCalendar from https://fullcalendar.io. After installing the library following set up directions from this helpful blog post, "https://levelup.gitconnected.com/create-a-month-week-and-day-view-calendar-with-react-and-fullcalendar-1794d76e6d06", we were able to display a full calendar in our app that can be viewed by either day, week, or month display. On page load, a FETCH request pulls data for saved scheduled events from our restful API and populates them into the calendar. Our event input form accepts new scheduled event inputs from the user, including the start time and end time, and once submitted, the event immediately renders to the DOM. When an event on the calendar is clicked, the details of the event are displayed, and the user can choose to either keep the event or delete the event. When the event is deleted, it is permanently deleted from both the calendar and the API. When it is kept, the detail view is hidden, and the DOM returns to the standard calendar and form view.

    To-Do Lists:
    This section focuses on managing goals and important lists for the user. It provides for a number of important lists we agreed were essential to organization and time management: a short-term goals list, a long-term goals list, a pinned items list, and a shopping list. The user can view the list contents by clicking on the name of any list. In this detail view, items on the list are displayed in color based on their priority level (high or low/none) and can be deleted or marked as complete/incomplete. Clicking the delete button removes the item from the DOM and API. Clicking to mark an item as complete or incomplete toggles between strike through text and normal text, respectively. New items can be added to any list using a form submission at the bottom of each list detail view.

# Learnings and Struggles:
    One major thing we struggled with and learned during the development of this project was the use of an external library, specifically understanding its extensive documentation and applying its built-in functions, methods, and props to the desired features of our project. Doing this was particularly challenging because this was our first experience using a library other than React, but we were able to accomplish basic functionality and learned a great deal along the way.

    Goals for Future Iterations:
    - Login functionality
    - User add custom list
    - More goal and habit tracking features
    - Fix known bugs

    Known Bugs: 
    - If a new event is added to the calendar immediately after deleting an event from the calendar, the deleted event returns to the DOM on form submit of the new event. The page must be refreshed for both the deleted event to disappear and the new event to display.

# Acknowledgments:
    This project was accomplished with the help of the many various resources provided by Flatiron Bootcamp, including our instructor who supported us as we struggled to understand how to use the FullCalendar library and who continuously pushed us in the right direction so we could learn more each step of the way. 
