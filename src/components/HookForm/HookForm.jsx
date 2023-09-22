import useInputState from "../../Hooks/useInputState";


const HookForm = () => {

    const [name, handleNameChange] = useInputState('shakil');
    const [email, handleEmailChange] = useInputState();
    const [pass, handlePassChange] = useInputState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(pass)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name"/>
                <br />
                <input value={email} onChange={handleEmailChange} type="email" name="email"/>
                <br /> 
                <input value={pass} onChange={handlePassChange}  type="password" name="password"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;