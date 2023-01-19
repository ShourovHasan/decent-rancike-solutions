import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Customers from "../../Pages/Customers/Customers";
import Features from "../../Pages/Features/Features";
import Help from "../../Pages/Help/Help";
import Pricing from "../../Pages/Pricing/Pricing";
import LoginSignUp from "../../Pages/SharedPages/LoginSignUp/LoginSignUp";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/pricing',
                element: <Pricing></Pricing>
            },
            {
                path: '/features',
                element: <Features></Features>
            },
            {
                path: '/customers',
                element: <Customers></Customers>
            },
            {
                path: '/contact_us',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/',
                element: <LoginSignUp></LoginSignUp>
            },
            {
                path: '/help',
                element: <Help></Help>
            },
        ]
    }
])