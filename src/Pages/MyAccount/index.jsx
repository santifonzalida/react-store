import { useContext, useEffect } from "react"
import { Layout } from "../../Components/Layout"
import { LoginContext } from "../../Context/loginContext"

function MyAccount() {
  
  const context = useContext(LoginContext);

  useEffect(() => {
    context.getUserInfo();
  },[])

  return (
    <Layout>
    {context.user?.email}
  </Layout>
  )
}

export { MyAccount }
