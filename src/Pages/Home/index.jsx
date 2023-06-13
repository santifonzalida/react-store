import { useState, useEffect } from "react"
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

function Home() {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json()
      .then(data => setProducts(data)));
  },[])

  return (
      <Layout>
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            products?.map((product) => (
              <Card key={product.id} data={product}/>
            ))
          }
        </div>
        <ProductDetail />
        <CheckoutSideMenu />
      </Layout>
  )
}

export { Home }
