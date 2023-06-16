
import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  console.log(context.order)
    return (
      <Layout>
        My orders 
        <div className='flex flex-col w-80'>
                {context.order?.slice(-1)[0].products.map(product => (
                    <OrderCard props={product} key={product.id} delete={null}/>
                ))}
        </div>
      </Layout>
    )
  }
  
  export { MyOrders }
  