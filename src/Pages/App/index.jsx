import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context'; 
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { SignIn } from '../SignIn';
import { NotFound } from '../NotFound';
import { Navbar } from '../../Components/Navbar';
import { Category } from '../Category';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';
import '../../App.css'
import { LoginContextProvider } from '../../Context/loginContext';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> }, 
    { path: '/my-orders/last', element: <MyOrder/> },
    { path: '/my-orders/:id', element: <MyOrder/> },
    { path: '/category/:id', element: <Category /> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '*' , element: <NotFound />},
  ]);
  return routes;
}

function App() {
  return (
      <ShoppingCartProvider>
        <BrowserRouter>
        <LoginContextProvider>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
          </LoginContextProvider>
        </BrowserRouter>
      </ShoppingCartProvider>
  )
}

export default App
