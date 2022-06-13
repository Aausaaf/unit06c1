import "./form.css"
const Formnavbar = (props) => {
    return (<>
        <div className="navbar">
            <div onClick={() => {
                props.changes(0)
            }} className="fillform"><p>Fill Item Details</p></div>
            <div onClick={() => {
                props.changes(1)
            }} className="detailspage"><p>item Listed</p></div>
        </div>
    </>);
}
 
export default Formnavbar;