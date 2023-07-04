import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { LoginContext } from "../../Context/loginContext";

function MyAccount() {
  
  const navigate = useNavigate();
  const context = useContext(LoginContext);

  useEffect(() => {
    context.getUserInfo().then((data) => {
      if(data.statusCode == 401) {
          navigate('/login');
          context.setIsUserLogin(false);
          context.setError(data.message);
      }else {
          context.setUser(data);
          context.setIsUserLogin(true);
      }
      context.setIsLoading(false);
      });
  },[])

  return (
    <Layout>
      <div className="max-w-lg mx-auto my-10 bg-zinc-80 rounded-lg shadow-md p-5">
        <img className="w-32 h-32 rounded-full mx-auto" src={context.user?.avatar} alt="Avatar" />
        <h2 className="text-center text-2xl font-semibold mt-3">{context.user?.name}</h2>
        <p className="text-center text-gray-600 mt-1">{context.user?.role}</p>
        <div className="flex justify-center mt-5">
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Twitter</a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold">Bio</h3>
          <p className="text-gray-600 mt-2">John is a software engineer with over 10 years of experience in developing web and mobile applications. He is skilled in JavaScript, React, and Node.js.</p>
        </div>
      </div>
    </Layout>
  )
}

export { MyAccount }
