
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../MainLayout/Mainlayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const mycreateRouter = createBrowserRouter([
    {
        path:'/',
        element: <Mainlayout></Mainlayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            }
        ]
    }

])

export default mycreateRouter;