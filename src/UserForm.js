import React from "react";
import './UserForm.css';
import UserChoice from "./UserChoice";

export default function UserForm() {

    return (
        <div className="userForm">
            <form /*onSubmit={g}*/ >
                <div className="choice">
                    <div>First Name</div>
                    <div>
                        <label className="general">
                            <input className="inputEqualWidth" type="text" value='' /*onChange={ge}*/ placeholder='First Name' />
                        </label>
                    </div>
                </div>
                <div className="choice">
                    <div>Last Name</div>
                    <div>
                        <label className="general">

                            <input className="inputEqualWidth" type="text" value='' /*onChange={ge}*/ placeholder='Last Name' />
                        </label>
                    </div>
                </div>
                <div className="choice">
                    <div>Age</div>
                    <div>  <label className="general">

                        <input type="text" className="inputEqualWidth" value='' /*onChange={ge}*/ placeholder='Age' />
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
                            <select name="color" className="inputEqualWidth">
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
                        <label className="sauces"><input type="checkbox" name="ketchup" value="yes" /> Ketchup  </label>
                        <label className="sauces">  <input type="checkbox" name="mustard" value="yes" /> Mustard  </label>
                        <label className="sauces">  <input type="checkbox" name="mayonnaise" value="yes" /> Mayonnaise  </label>
                        <label className="sauces">  <input type="checkbox" name="guacamole" value="yes" /> Guacamole  </label>
                    </div>
                </div>
                <div className="choice">
                    <div>Best Stoodge</div>
                    <div>
                        <label className="stoodge"> <input checked type="radio" name="larry" value="lager" /> Larry</label>
                        <label className="stoodge"> <input type="radio" name="moe" value="lager" /> Moe</label>
                        <label className="stoodge"> <input type="radio" name="curly" value="lager" /> Curly</label>
                    </div> </div>
                <div className="choice">
                    <div>Notes</div>

                    <div>  <label> <textarea className="inputEqualWidth" placeholder="Notes" maxLength={100} name="text1" cols="30" rows="10"></textarea> </label></div>
                </div>
                <div className="btn">
                    <button className="btnS" type="submit">Submit</button>
                    <button className="btnR" type="reset">Reset</button>
                </div>

                <UserChoice />

            </form >
        </div >
    )


}