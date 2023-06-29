import { useContext } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import { LoginContext } from '../../Context/loginContext';

const SignIn = (props) => {

    const context = useContext(LoginContext);

    const renderLoginButton = () => {
        if(context.isLoading) {
          return (  
            <button className='flex items-center justify-center bg-black py-3 text-white w-full rounded-lg' disabled >Loading...
              <ArrowPathIcon className="animate-spin h-6 w-6"/>
            </button>
            );
        } else {
          return (<button className='bg-black py-3 text-white w-full rounded-lg ' onClick={() => context.login()}>Sing in</button>);
        }
    }

    const showSignUpPage =() => {
        props.updateState(true)
    }

    return (
        <div>
            <div className='flex items-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>Welcome back</h1>
            </div>
            <div>
                john@mail.com // 
                changeme
            </div>
            <div className="mt-5">
                <p>Username:</p>
                <input
                    type="text"
                    placeholder='username'
                    className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                    onChange={(event) => context.setUsername(event.target.value)} 
                />
                <p>Password:</p>
                <input
                    type="password"
                    placeholder='password'
                    className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                    onChange={(event) => context.setPassword(event.target.value)}
                />
            </div>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                {renderLoginButton()}
            </div>
            <a className="cursor-pointer" onClick={showSignUpPage}>
                <p className="text-md italic underline">
                    Create new account
                </p>
            </a>
            <div className={`${context.error ? 'flex' : 'hidden'}  items-center justify-center relative w-80 mb-4 bg-red-500 rounded-lg`}>
                <p>
                    Invalid username or password...
                </p>
            </div>
            
            
        </div>
    );
}

export { SignIn }