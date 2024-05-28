import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Filter from "../components/Filter";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            path:"/filter",
            element:<Filter/>
        }
      ]
    },
  ]);

export default router;