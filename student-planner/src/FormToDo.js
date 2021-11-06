import { useState } from "react"


function FormToDo({ listType, handleNewEntry }) {
    const [formData, setFormData] = useState({
        item: "",
        listName: listType,
        priority: "",
        completed: false
    })



    function handleInputChange(e) {
        setFormData(currentFormData => ({ ...currentFormData, [e.target.name]: e.target.value }))

    }

    function handleSubmit(e) {
        e.preventDefault()
        const entryData = {
            item: formData.item,
            priority: formData.priority,
            listName: listType,
            completed: false
        };
        fetch(`https://proj2-server-app.herokuapp.com/${listType}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(entryData),
        })
            .then((r) => r.json())
            .then((entryData) => {
                handleNewEntry(entryData)
                setFormData({
                    item: "",
                    listName: listType,
                    priority: "",
                    completed: false})
            });
    }



    return (
        <div id="formToDo">
            <form onSubmit={handleSubmit}>
                <label> New Task:
                    <input type="text" name="item" placeholder="Enter your task here..." value={formData.item} onChange={handleInputChange} />
                </label>

                <label> Priority level:&nbsp;
                    <select name="priority" defaultValue = "selected" onChange={handleInputChange}>
                        <option name = "selected" value="placeholder">Select Priority</option>
                        <option value="high">High</option>
                        <option value="low">Low</option>
                        <option value="none">None</option>
                    </select>
                </label>
                <button id="formToDoSubmit" type="submit"> Submit </button>

            </form>
        </div>
    )
}

export default FormToDo