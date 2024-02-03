import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import AppStore from "./Components/Utils/AppStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main_Container from "./Components/Main_Container";
import WatchPage from "./Components/WatchPage";

function App() {

  const AppRouter= createBrowserRouter([
     {
       path:"/",
       element:<Body/>,
       children:[
         {
            path:"/youtube",
            element:<Main_Container/>
         },
         {
            path:"/watch",
            element:<WatchPage/>
         }
       ]
     }
  ])

  return (
<Provider store={AppStore}>
    <div>
       <Header/>
       <RouterProvider router={AppRouter}/>
    </div>
</Provider>
  );
}

export default App;

