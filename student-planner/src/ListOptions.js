import { Link } from "react-router-dom"

function ListOptions({ setList, setListType, setformView, renderToDoListTitle }) {

    function handleClick(e) {
        const listID = e.target.id
        fetch(`https://proj2-server-app.herokuapp.com/${listID}`)
            .then((response) => response.json())
            .then((data) => {
                setList(data);
                setListType(listID)
                setformView(true)
                renderToDoListTitle(listID)
            });
    };

    return (<div className="listOptions" id="listOptionsSection">
        <ul id="listOfToDoLists">
            <Link to={`/shortTermToDo`} style={{ textDecoration: 'none' }} >
                <li className="listOptions" id="shortTermToDo" onClick={handleClick}>Short Term To Dos</li>
            </Link>
            <Link to={`/longTermToDo`} style={{ textDecoration: 'none' }}>
                <li className="listOptions" id="longTermToDo" onClick={handleClick}>Long Term To Dos</li>
            </Link>
            <Link to={`/pinned`} style={{ textDecoration: 'none' }}>
                <li className="listOptions" id="pinned" onClick={handleClick}>Pinned Items</li>
            </Link>
            <Link to={`/shoppingList`} style={{ textDecoration: 'none' }}>
                <li className="listOptions" id="shoppingList" onClick={handleClick}>Shopping List</li>
            </Link>
        </ul>
    </div>
    )

}

export default ListOptions