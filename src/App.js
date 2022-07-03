import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import ProtectedRoutes from './routes/protected-routes';
import PublicRoutes from './routes/public-route';
import { protectedRoutes, publicRoutes } from './routes/routes';
import Login from './pages/login';
import NotFound from './pages/notfound';


const App = () => (

  <Routes>
    <Route path='*' element={<NotFound />} />

    <Route path="/" element={<ProtectedRoutes />}>
      {
        protectedRoutes.map(route => {
          return <Route path={route.path} element={route.component} />

        })
      }
    </Route>
    {/* <Route path={"login"} element={<PublicRoutes />}>
          <Route path={"/login"} element={<Login />} />
        </Route> */}
    {
      publicRoutes.map(route => {
        return <Route path={route.path} element={<PublicRoutes />}>
          <Route path={`/${route.path}`} element={route.component} />
        </Route>
      })
    }

  </Routes>



)

export default App;