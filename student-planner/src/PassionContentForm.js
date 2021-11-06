
export default function PassionContentForm ({form, form : {focus, grateful}, setForm, setPassion, setShowForm, setPassionContent}){
    
    function handleFormInput (e){
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    function handleSubmit (e){
        e.preventDefault();
        const newPassion = {
            focus: form.focus,
            grateful: form.grateful
        }
        fetch(`https://proj2-server-app.herokuapp.com/passion/1`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPassion)
        })
        .then (resp => resp.json())
        .then (data => {
            console.log(data)
            setPassion([data])
            setForm({
                focus: "",
                grateful: ""
              })
            alert("Your new entry has been logged")
            setShowForm(current => !current)
            setPassionContent(current => !current)
        })

    }

    return (
        <div> 
        <form id="passionContentForm" onSubmit = {handleSubmit}> 
            <label>Enter your focus for the day:
                <input className="passionForm" type = "text" name = "focus" value = {focus} onChange = {handleFormInput}/>
            </label>

            <label>What are you grateful for today?
                <input className="passionForm" name = "grateful" type = "text" value = {grateful} onChange = {handleFormInput}/>
            </label>
            <button id="passionFormSubmit">Submit</button>
        </form>
        </div>
    )
}
