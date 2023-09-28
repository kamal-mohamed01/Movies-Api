import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import Layout from '../src/components/Layout/Layout';
import About from '../src/components/About/About';
import Contacts from '../src/components/Contacts/Contacts';
import Notfound from '../src/components/Notfound/Notfound';





let routers = createBrowserRouter ([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'contacts',element:<Contacts/>},
    {path:'*',element:<Notfound/>},
  ]}
])


export default function App() {
  return <RouterProvider router={routers}>

  </RouterProvider>
}