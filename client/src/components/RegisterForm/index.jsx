import React from 'react';
import Login from '../';

const Register = ({passwordText, setPasswordText, usernameText, setUsernameText}) => {


    
    const handleUsernameInput = (e) => {
        e.preventDefault()
        const newUsername = e.target.value
        setUsernameText(newUsername)
    }

    const handlePasswordInput = (e) => {
        e.preventDefault()
        const newPassword = e.target.value
        setPasswordText(newPassword)
    }

    async function handleSubmit (e) {
        e.preventDefault();

        const form = new FormData(e.target)

        const options = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: form.get("username"),
                password: form.get("password")
            })
        }

        const response = await fetch("http://localhost:3000/users/register", options)
        const data = await response.json()

        if (response.status == 201) {
            alert(`User ${data["username"]} created!`);
            <div>
                <Login />
            </div>
        }

    }

    
     return (
        <div class='registerForm'>
            <h1> Fill in your details to register for the Diary app!</h1>
            <form>
                <label>Username</label>
                 <input type="text" onChange={handleUsernameInput} placeholder='Username' value={usernameText} required/>
                 <label>Password</label>
                <input type="password" onChange={handlePasswordInput}  placeholder='Password' value={passwordText} required/>
                <input type='submit' onClick={handleSubmit} />
            </form>
            
        </div>
        )

    }

export default Register;
