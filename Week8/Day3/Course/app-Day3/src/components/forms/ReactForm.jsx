import { useState } from "react";

const ReactForm = (props) => {
    const [name, setName] = useState('');
    const [select, setSelect] = useState('');
    const [yesNo, setYesNo] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <h2>ReactForm</h2>
            <form onSubmit ={handleSubmit}>
                <input placeholder="name" onChange={(e) => setName(e.target.value)} /><br />
                <select onChange={(e) =>setSelect(e.target.value)}>
                    <option value = {1}> One</option>
                    <option value = {2}> Two</option>
                    <option value = {3}> Three</option>
                </select>
                <input type="checkbox" onChange ={(e) => setYesNo(e.target.checked)}></input>
            <input type='submit' value='Submit'/>
            </form>
        </>
    )
}

export default ReactForm