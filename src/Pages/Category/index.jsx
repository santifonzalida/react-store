import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";

const Category = () => {
    let location = useLocation();
    const context = useContext(ShoppingCartContext);
    let productsFiltered = context.filteredProductsByCategory(context.products, location.state?.id);
    const [searchText, setSearchText] = useState("");

    const renderProducts = () => {
        if(productsFiltered?.length > 0) {
            return (
                productsFiltered?.map((product) => (
                    <Card key={product.id} data={product}/>
                ))
            );
        }else {
            return(
              <div>We dont have anything to show :(</div>
            )
        }
    }

    const filterProductsByText = () => {
        const products = productsFiltered && productsFiltered.length > 0 ?  [...productsFiltered] : [];
        productsFiltered = products?.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
        if(productsFiltered?.length > 0) {
            return (
                productsFiltered?.map((product) => (
                    <Card key={product.id} data={product}/>
                ))
            );
        }else {
            return(
                <div>We dont have anything to show :(</div>
              )
        }
    }

    return (
        <Layout>
            <div className="flex items-center justify-center relativ w80 mb-4">
                <h1 className="font-medium text-xl">Exclusive Products</h1>
            </div>
            <input 
                type="text" 
                placeholder="Search a product" 
                className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
                onChange={(event) => setSearchText(event.target.value)} />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            { searchText ? filterProductsByText() : renderProducts() }
            </div>
        </Layout>
    );
}

export { Category };