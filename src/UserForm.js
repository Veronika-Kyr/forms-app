import React, { createRef, useState } from "react";
import './UserForm.css';
// import UserChoice from "./UserChoice";

export default function UserForm() {
    let [disabledBtn, setdisabledBtn] = useState('disabled');
    let [firstName, setfirstName] = useState({});
    let [lastName, setlastName] = useState({});
    let [age, setAge] = useState({});
    let [employed, setEmployed] = useState({ employed: "false" });
    let [color, setColor] = useState({});
    let [sauces, setSauces] = useState([]);
    let [stoodge, setStoodge] = useState({ stoodge: 'larry' });
    let [notes, setNotes] = useState({});
    let form = createRef();
    let [showSauces, setshowSauces] = useState({});
    let [ageclassName, setageclassName] = useState('inputEqualWidth');
    let [firstnameclassName, setfirstnameclassName] = useState('inputEqualWidth');
    let [lastnameclassName, setlastnameclassName] = useState('inputEqualWidth');
    let [notesclassName, setnotesclassName] = useState('inputEqualWidth');

    function resetData(e) {
        if (!disabledBtn) {
            setdisabledBtn('disabled');
            setfirstName({});
            setlastName({});
            setAge({});
            setEmployed({ employed: "false" });
            setColor({});
            setSauces([]);
            setStoodge({ stoodge: 'larry' });
            setNotes({});
            setshowSauces({});
            setageclassName('inputEqualWidth');
            setfirstnameclassName('inputEqualWidth');
            setlastnameclassName('inputEqualWidth');
            setnotesclassName('inputEqualWidth');
            form.current.reset();
        }
    };

    function handleSauces(event) {
        let arrOFsauces = [...sauces];
        if (event.target.checked) {
            arrOFsauces.push(event.target.value);
        }
        else {
            arrOFsauces.splice(arrOFsauces.indexOf(event.target.value), 1);
        }
        setSauces(arrOFsauces);
        setshowSauces({ 'sauces': arrOFsauces });
    }
    function fieldValidator() {
        let s = 0;
        if (!/^\d+$/.test(age.age)) { setageclassName('redBorder'); setAge({}); } else { s = s + 1; }
        if (!/^[a-zA-Z\s]+$/.test(firstName.firstName)) { setfirstnameclassName('redBorder'); setfirstName({}); } else { s = s + 1; }
        if (!/^[a-zA-Z\s]+$/.test(lastName.lastName)) { setlastnameclassName('redBorder'); setlastName({}); } else { s = s + 1; }
        if (notes.notes && notes.notes.length > 100) { setnotesclassName('redBorder'); setNotes({}); } else { s = s + 1; }
        if (s === 4) { return true } else alert('Correct your inputs!');
    }

    function submitData(event) {
        event.preventDefault();
        let objForm = {};
        let respValid = fieldValidator();
        if (respValid) {
            setageclassName('inputEqualWidth');
            setfirstnameclassName('inputEqualWidth');
            setlastnameclassName('inputEqualWidth');
            setnotesclassName('inputEqualWidth');
            console.log(firstName, lastName, age, employed, color, stoodge, notes, sauces);
            objForm = Object.assign(firstName, lastName, age, employed, color, stoodge, notes);
            objForm['sauces'] = sauces;
            alert(JSON.stringify(objForm));
            console.log(objForm);
        }
    }

    return (
        <div className="userForm">
            <form onSubmit={submitData} onChange={() => { setdisabledBtn(false) }} ref={form}>
                <div className="choice">
                    <div>First Name</div>
                    <div>
                        <label className="general">
                            <input className={firstnameclassName} type="text" onChange={(event) => { setfirstName({ firstName: event.target.value }) }} placeholder='First Name' />
                        </label>
                    </div>
                </div>
                <div className="choice">
                    <div>Last Name</div>
                    <div>
                        <label className="general">

                            <input className={lastnameclassName} type="text" onChange={(event) => { setlastName({ lastName: event.target.value }) }} placeholder='Last Name' />
                        </label>
                    </div>
                </div>
                <div className="choice">
                    <div>Age</div>
                    <div>  <label className="general">

                        <input type="text" className={ageclassName} onChange={(event) => { setAge({ age: event.target.value }) }} placeholder='Age' />
                    </label></div>
                </div>
                <div className="choice">
                    <div>Employed</div>
                    <div>  <label className="empl"> <input type="checkbox" name="empl" value="false" onChange={() => setEmployed({ employed: "true" })} />  </label></div>
                </div>
                <div className="choice">
                    <div>Fafourite Color</div>
                    <div>
                        <label>
                            <select name="color" className="inputEqualWidth" onChange={(event) => { setColor({ color: event.target.value }) }}>
                                <option value="red"></option>
                                <option value="red">red</option>
                                <option value="green">green</option>
                                <option value="blue">blue</option>
                                <option value="violet">violet</option>
                            </select>
                        </label></div>
                </div>
                <div className="choice">
                    <div className="head">Sauces</div>
                    <div>
                        <label className="sauces"><input type="checkbox" value="ketchup" checked={sauces.includes('ketchup')} onChange={handleSauces} /> Ketchup  </label>
                        <label className="sauces">  <input type="checkbox" value="mustard" checked={sauces.includes('mustard')} onChange={handleSauces} /> Mustard  </label>
                        <label className="sauces">  <input type="checkbox" value="mayonnaise" checked={sauces.includes('mayonnaise')} onChange={handleSauces} /> Mayonnaise  </label>
                        <label className="sauces">  <input type="checkbox" value="guacamole" checked={sauces.includes('guacamole')} onChange={handleSauces} /> Guacamole  </label>
                    </div>
                </div>
                <div className="choice">
                    <div>Best Stoodge</div>
                    <div>
                        <label className="stoodge"> <input defaultChecked type="radio" name="group1" value="larry" onChange={(event) => { setStoodge({ stoodge: event.target.value }) }} /> Larry</label>
                        <label className="stoodge"> <input type="radio" name="group1" value="moe" onChange={(event) => { setStoodge({ stoodge: event.target.value }) }} /> Moe</label>
                        <label className="stoodge"> <input type="radio" name="group1" value="curly" onChange={(event) => { setStoodge({ stoodge: event.target.value }) }} /> Curly</label>
                    </div> </div>
                <div className="choice">
                    <div>Notes</div>

                    <div>  <label> <textarea className={notesclassName} placeholder="Notes" maxLength={100} name="text1" cols="30" rows="10" onChange={(event) => setNotes({ notes: event.target.value })}></textarea> </label></div>
                </div>
                <div className="btn">
                    <button className="btnS" type="submit" disabled={disabledBtn} >Submit</button>
                    <button className="btnR" type="reset" disabled={disabledBtn} onClick={resetData}>Reset</button>
                </div>

                <div className="userChoice">
                    ｛
                    {firstName.firstName && <p> {`firstName: ${firstName.firstName} `} </p>}
                    <p> {Object.keys(lastName)}   {Object.values(lastName)}</p>
                    <p> {Object.keys(age)}   {Object.values(age)}</p>
                    <p> {Object.keys(color)}   {Object.values(color)}</p>
                    <p> {Object.keys(employed)}   {Object.values(employed)}</p>
                    <p> {Object.keys(notes)}   {Object.values(notes)}</p>
                    <p> {Object.keys(stoodge)}   {Object.values(stoodge)}</p>
                    <p> {Object.keys(showSauces)}  {sauces.map((sauce, index) => {
                        return (
                            <span key={index} > {`  ${sauce},   `} </span>
                        )
                    })} </p>
                    ｝
                </div>


            </form >
        </div >
    )


}