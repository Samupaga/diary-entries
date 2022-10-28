import React from 'react';

const Login = (passwordText, setPasswordText, usernameText, setUsernameText) => {
    const [loggedIn, setLoggedIn] = useState(false)

    function handleUsername(e) {
        setUsernameText(e.target.value);
    }

    function handlePassword(e) {
        setPasswordText(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()

         const form = new FormData(e.target);

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

    const response = await fetch("http://localhost:3000/users/login", options);
    const data = await response.json();
    console.log(data);
    if (response.status == 200) {
        localStorage.setItem("discretionUser", data["token"]);
        setLoggedIn(true)
    } else {
        alert(`Error: ${data["error"]}`);
    }

    }

    return (
        <div className='login-form'>
            <h1> Fill in your details to login to the Diary app</h1>
            <form>
                <label for="username">Username</label>
                <input id="username" type="text" value={usernameText} onChange={handleUsername}/>
                <label for="password">Password</label>
                <input id="password" type="text" value={passwordText} onChange={handlePassword}/>
                <input type='submit' onClick={handleSubmit} />
            </form>
        </div>
    );
}

export default Login;
