import Header from "./Header"
import { useState, useEffect } from "react"
import CalendarWeek from "./CalendarWeek"
import ToDoListContainer from "./ToDoListContainer"
import { BrowserRouter } from "react-router-dom"
import PassionContent from "./PassionContent"
import PassionContentForm from "./PassionContentForm"

function App() {
  const [passion, setPassion] = useState([])
  const [passionContent, setPassionContent] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [passionForm, setPassionForm] = useState({
    focus: "",
    grateful: ""
  })

  useEffect(() => {
        fetch(`https://proj2-server-app.herokuapp.com/passion`)
        .then (resp => resp.json())
        .then (data => setPassion(data))
  }, [])

  function handleHidePassionButtonClick (){
    console.log("i have been clicked")
    setShowForm(current => !current)
    setPassionContent(current => !current)
  }

  return (
    <div>
      {/* <BrowserRouter> */}
        <Header />

    <div id="focusSection">
        {showForm ? <PassionContentForm form = {passionForm} setForm = {setPassionForm} setPassion = {setPassion} setShowForm = {setShowForm} setPassionContent = {setPassionContent}/> : <PassionContent passion = {passion}/>}

        <button id="passionFormView" onClick = {handleHidePassionButtonClick}> {passionContent ? "Enter your new focus and gratitude for the day" : "Hide Form" }</button>
        </div>
        <div id="calendarSection"><CalendarWeek /></div>
              

        <ToDoListContainer />
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App;
