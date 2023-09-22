import { useState } from "react";

const StatefulForm = () => {
    const [user, setUser] = useState('Shakil Chowdhury');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(password < 6) {
             return setError('password must be at least 6 character or above')
        } else {

            console.log(user)
            console.log(email)
            console.log(password)
        }
    }

    const handleUser = e => {
        setUser(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={user} type="text" name="name" onChange={handleUser}/>
                <br />
                <input type="email" name="email" onChange={handleEmail} required/>
                <br /> 
                <input type="password" name="password" onChange={handlePasswordChange}/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;