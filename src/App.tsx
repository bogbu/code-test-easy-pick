import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/Error";
import {PrivateRoute} from "./routes/PrivateRoute.tsx";
import MainPage from "./pages/main";
import UserPage from "./pages/user";
import UserFormPage from "./pages/form";
import Detail from "./pages/detail";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage/>,
        Component: PrivateRoute,
        children: [
            {
                index: true,
                Component: MainPage,
            },
            {
                path: "users",
                Component: UserPage,
            },
            {
                path: "users/form",
                // action: loginAction,
                Component: UserFormPage,
            },
            {
                path: "users/:id",
                // action: loginAction,
                Component: Detail,
            },
        ],
    },
]);

function App() {
    return (
        <><RouterProvider router={router} fallbackElement={<p>Initial Load...</p>}/></>
    );
}

export default App;