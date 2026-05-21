import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  
    const error = useRouteError();

    return (
        <div>
            <h1> Opps! something Error </h1>
            {error.data};
            <NavLink to="/" ><button>Go Home</button></NavLink>
        </div>
  )
}
