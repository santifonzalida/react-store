import { useContext, useState } from "react";
import { LoginContext } from "../../Context/loginContext";

const SignUp = (props) => {

    const context = useContext(LoginContext);
    const [newUser, setNewUser] = useState({avatar: 'http://example.com', role:"customer"});

    const showSignUpPage =() => {
        props.updateState(false)
    }

    const create = () => {
        context.createUser(newUser);
    }

    return (
        <div>
            <div className="flex items-center">
                <button className="text-md italic underline mr-5" onClick={showSignUpPage}> {'<'} back</button>
                <h2 className="flex text-xl font-medium text-left">Create new user</h2>
            </div>
            <div className="mt-5">
                <p>Complete name:</p>
                <input
                    type="text"
                    placeholder='name'
                    className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                    onChange={(event) => setNewUser({...newUser, name: event.target.value})} 
                />
                <p>Email:</p>
                <input
                    type="email"
                    placeholder='user@example.com'
                    className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                    onChange={(event) => setNewUser({...newUser, email: event.target.value})} 
                />
                <p>Password:</p>
                <input
                    type="password"
                    className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                    onChange={(event) => setNewUser({...newUser, password: event.target.value})} 
                />
            </div>
            <button className='bg-black py-3 text-white w-full rounded-lg' onClick={create}>Create</button>
        </div>
    )
}

export { SignUp };