import React, { useState } from "react";
import './UserForm.css';
// import UserChoice from "./UserChoice";

export default function UserForm() {
    // let [data, setData] = useState({});
    let [firstName, setfirstName] = useState({});
    let [lastName, setlastName] = useState({});
    let [age, setAge] = useState({});
    // if (firstName) { setData({ firstName: { firstName } }) };
    // if (lastName) { setData({ lastName: { lastName } }) };
    // if (age) { setData({ age: { age } }) };

    return (
        <div className="userForm">
            <form /*onSubmit={g}*/ >
                <div className="choice">
                    <div>First Name</div>
                    <div>
                        <label className="general">
                            <input className="inputEqualWidth" type="text" onChange={(event) => { setfirstName({ firstName: event.target.value }) }} placeholder='First Name' />
                        </label>
                    </div>
                </div>
                <div className="choice">
                    <div>Last Name</div>
                    <div>
                        <label className="general">

                            <input className="inputEqualWidth" type="text" onChange={(event) => { setlastName({ lastName: event.target.value }) }} placeholder='Last Name' />
                        </label>
                    </div>
                </div>
                <div className="choice">
                    <div>Age</div>
                    <div>  <label className="general">

                        <input type="text" className="inputEqualWidth" onChange={(event) => { setAge({ age: event.target.value }) }} placeholder='Age' />
                    </label></div>
                </div>
                <div className="choice">
                    <div>Employed</div>
                    <div>  <label className="empl"> <input type="checkbox" name="empl" value="yes" />  </label></div>
                </div>
                <div className="choice">
                    <div>Fafourite Color</div>
                    <div>
                        <label>
                            <select name="color" className="inputEqualWidth" /*onChange={(event) => { setData({ color: event.target.value }) }}*/>
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
                        <label className="sauces"><input type="checkbox" name="ketchup" value="Ketchup" /> Ketchup  </label>
                        <label className="sauces">  <input type="checkbox" name="mustard" value="Mustard" /> Mustard  </label>
                        <label className="sauces">  <input type="checkbox" name="mayonnaise" value="Mayonnaise" /> Mayonnaise  </label>
                        <label className="sauces">  <input type="checkbox" name="guacamole" value="Guacamole" /> Guacamole  </label>
                    </div>
                </div>
                <div className="choice">
                    <div>Best Stoodge</div>
                    <div>
                        <label className="stoodge"> <input checked type="radio" name="Larry" value="lager" /> Larry</label>
                        <label className="stoodge"> <input type="radio" name="moe" value="Moe" /> Moe</label>
                        <label className="stoodge"> <input type="radio" name="curly" value="Curly" /> Curly</label>
                    </div> </div>
                <div className="choice">
                    <div>Notes</div>

                    <div>  <label> <textarea className="inputEqualWidth" placeholder="Notes" maxLength={100} name="text1" cols="30" rows="10"></textarea> </label></div>
                </div>
                <div className="btn">
                    <button className="btnS" type="submit">Submit</button>
                    <button className="btnR" type="reset">Reset</button>
                </div>

                <div className="userChoice">
                    ｛
                    <p> {Object.keys(firstName)}   {Object.values(firstName)}</p>
                    <p> {Object.keys(lastName)}   {Object.values(lastName)}</p>
                    <p> {Object.keys(age)}   {Object.values(age)}</p>
                    ｝
                </div>


            </form >
        </div >
    )


}