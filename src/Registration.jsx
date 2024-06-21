import React, { useState} from 'react';
import './styles/Registeration.css';
import axios from 'axios';

function Registration() {
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [password,setPass] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [address,setAddress] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [role,setRole] = useState("");

    const handleSave = (event) => {
        event.preventDefault(); // Prevent form submission

        const data = {
            userId: id,
            userName: name,
            userPassword: password,
            userEmail: email,
            userPhoneNumber: phoneNumber,
            userAddress: address,
            userAge: age,
            userGender: gender,
            role: role
        };

        const url = "https://localhost:7094/api/User/Create";
        axios
            .post(url, data)
            .then((result) => {
                alert(result.data);
            })
            .catch((error) => {
                console.error('There was an error!', error);
                alert('Error creating user: ' + error.message);
            });
    };

    return (
        <div className='app'>
            <header className='app-header'>
                <div className='left'>
                    <h1>Ticketify</h1>
                    {/* <Fragment> */}
                        <form className="registration-form" onSubmit={handleSave}>
                            <div className="form-group">
                                <label htmlFor="userId">UserId:</label>
                                <input type="text" id="userId" name="userId" onChange={(e) => setId(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userName">UserName:</label>
                                <input type="text" id="userName" name="userName" onChange={(e) => setName(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userPassword">UserPassword:</label>
                                <input type="password" id="userPassword" name="userPassword" onChange={(e) => setPass(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userEmail">Email:</label>
                                <input type="email" id="userEmail" name="userEmail" onChange={(e) => setEmail(e.target.value)}  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userPhoneNumber">Phone Number:</label>
                                <input type="text" id="userPhoneNumber" name="userPhoneNumber" onChange={(e) => setPhoneNumber(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userAddress">Address:</label>
                                <input type="text" id="userAddress" name="userAddress" onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userAge">Age:</label>
                                <input type="number" id="userAge" name="userAge" onChange={(e) => setAge(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userGender">Gender:</label>
                                <input type="text" id="userGender" name="userGender" onChange={(e) => setGender(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="role">Role:</label>
                                <input type="text" id="role" name="role" onChange={(e) => setRole(e.target.value)}/>
                            </div>
                            <button className="submit-button" type="submit">Register</button>
                        </form>
                    {/* </Fragment> */}
                </div>
                <div className='right'>
                    <div className='overlay'>
                        <p className='overlay-text'>Welcome<br/>Get yourself registered with us</p>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Registration;