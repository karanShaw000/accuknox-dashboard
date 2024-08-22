import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RecoilRoot } from "recoil"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import { CrumbLink } from "./components/BreadCrumbs"
import Test from "./pages/Test"

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            handle: {
                crumb: () => <CrumbLink to="/" text="Home" />
            },
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: 'dashboard',
                    element: <Dashboard />,
                    handle: {
                        crumb: () => <CrumbLink to="/dashboard" text="Dashboard" />
                    }
                },
                {
                    path: 'test',
                    element: <Test />,
                    handle: {
                        crumb: () => <CrumbLink to="/test" text="Test" />
                    }
                }
            ]
        }
    ])
    return <>
        <RecoilRoot>
            <RouterProvider router={router}></RouterProvider>
        </RecoilRoot>
    </>
}

export default App
