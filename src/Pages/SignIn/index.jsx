import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { LoginContext } from "../../Context/loginContext"


function SignIn() {

  const context = useContext(LoginContext);

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Sign in</h1>
      </div>
      <div>
      john@mail.com // 
      changeme
      </div>
      <input
        type="text"
        placeholder='username'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => context.setUsername(event.target.value)} />
      <input
        type="password"
        placeholder='password'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => context.setPassword(event.target.value)} />
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <button className='bg-black py-3 text-white w-full rounded-lg ' onClick={() => context.login()}>Sing in</button>
      </div>
    </Layout>
  )
}

export { SignIn }
