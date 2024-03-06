import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", {
                nama,
                email,
                gender
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div classname="column is-half">
            <form onSubmit={saveUser}>
                <div classname="field">
                    <label className="label">Nama</label>
                    <div className="control">
                        <input type="text" className="input" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" />
                    </div>
                </div>
                <div classname="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                </div>
                <div classname="field">
                    <label className="label">Gender</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div classname="field">
                   <button type="submit" className="button is-success">Save</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default AddUser;
