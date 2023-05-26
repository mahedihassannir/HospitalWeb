import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import DoctorDetailes from "../Components/DoctorDetailes";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },

                {
                    path: 'checkout/:id',
                    element: <DoctorDetailes></DoctorDetailes>,
                    loader: ({ params }) => fetch(`http://localhost:5000/font/${params.id}`)
                },

            ]
        }
    ]
)


export default router