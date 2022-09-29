import React, { createRef, useState } from "react";
import './UserForm.css';

export default function UserForm() {
    const [disabledBtn, setdisabledBtn] = useState('disabled');
    const [clickSubmit, setclickSubmit] = useState(false);
    const [firstName, setfirstName] = useState({});
    const [lastName, setlastName] = useState({});
    const [age, setAge] = useState({});
    const [employed, setEmployed] = useState({ employed: "false" });
    const [color, setColor] = useState({});
    const [sauces, setSauces] = useState([]);
    const [stoodge, setStoodge] = useState({ stoodge: 'larry' });
    const [notes, setNotes] = useState({});
    const form = createRef();
    const [showSauces, setshowSauces] = useState({});
    const [ageclassName, setageclassName] = useState('inputEqualWidth');
    const [firstnameclassName, setfirstnameclassName] = useState('inputEqualWidth');
    const [lastnameclassName, setlastnameclassName] = useState('inputEqualWidth');
    const [notesclassName, setnotesclassName] = useState('inputEqualWidth');

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
            setclickSubmit(false);
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
        setclickSubmit(true);
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
        }
    }

    return (
        <div className="userForm">
            <form onSubmit={submitData} onChange={() => { setdisabledBtn(false) }} ref={form}>
                <div className="choice">
                    <div>First Name</div>
                    <div>
                        <label className="general">
                            <input className={firstnameclassName} type="text" onChange={(event) => {
                                if (!clickSubmit) { setfirstName({ firstName: event.target.value }); }
                                else {
                                    if (!/^[a-zA-Z\s]+$/.test(event.target.value)) { setfirstnameclassName('redBorder'); setfirstName({}); }
                                    else {
                                        setfirstName({ firstName: event.target.value });
                                        setfirstnameclassName('inputEqualWidth');
                                    }
                                }
                            }} placeholder='First Name' />
                        </label>
                    </div>
                </div>
                <div className="choice">
                    <div>Last Name</div>
                    <div>
                        <label className="general">
                            <input className={lastnameclassName} type="text" onChange={(event) => {
                                if (!clickSubmit) { setlastName({ lastName: event.target.value }); }
                                else {
                                    if (!/^[a-zA-Z\s]+$/.test(event.target.value)) { setlastnameclassName('redBorder'); setlastName({}); }
                                    else {
                                        setlastName({ lastName: event.target.value });
                                        setlastnameclassName('inputEqualWidth');
                                    }
                                }
                            }} placeholder='Last Name' />
                        </label>
                    </div>
                </div>
                <div className="choice">
                    <div>Age</div>
                    <div>  <label className="general">
                        <input type="text" className={ageclassName} onChange={(event) => {
                            if (!clickSubmit) { setAge({ age: event.target.value }); }
                            else {
                                if (!/^\d+$/.test(event.target.value)) { setageclassName('redBorder'); setAge({}); }
                                else {
                                    setAge({ age: event.target.value });
                                    setageclassName('inputEqualWidth');
                                }
                            }
                        }} placeholder='Age' />
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
                    <div>  <label> <textarea className={notesclassName} placeholder="Notes" maxLength={100} name="text1" cols="30" rows="10" onChange={(event) => {
                        if (!clickSubmit) { setNotes({ notes: event.target.value }); }
                        else {
                            if (event.target.value && event.target.value.length > 100) { setnotesclassName('redBorder'); setNotes({}); }
                            else {
                                setNotes({ notes: event.target.value });
                                setnotesclassName('inputEqualWidth');
                            }
                        }
                    }}></textarea> </label></div>
                </div>
                <div className="btn">
                    <button className="btnS" type="submit" disabled={disabledBtn} >Submit</button>
                    <button className="btnR" type="reset" disabled={disabledBtn} onClick={resetData}>Reset</button>
                </div>
                <div className="userChoice">
                    ｛
                    {firstName.firstName && <p> {`"firstName": "${firstName.firstName}" `} </p>}
                    {lastName.lastName && <p> {`"lastName": "${lastName.lastName}" `} </p>}
                    {age.age && <p> {`"age": "${age.age}" `} </p>}
                    {color.color && <p> {`"color": "${color.color}" `} </p>}
                    {employed.employed && <p> {`"employed": "${employed.employed}" `} </p>}
                    {notes.notes && <p> {`"notes": "${notes.notes}" `} </p>}
                    {stoodge.stoodge && <p> {`"stoodge": "${stoodge.stoodge}" `} </p>}
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