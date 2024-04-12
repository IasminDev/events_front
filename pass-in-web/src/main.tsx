import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home } from './home'
import { ViewAttendee } from './view-attendee'
import { ViewEvent } from './view-event'
import { CreateEvent } from './create-event'
import { RegisterAttendee } from './create-attendee'
import { UpdateEvent } from './update-event'
import { UpdateAttendee } from './update-attendee'

import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/events",
        element: <ViewEvent />,
    },
    {
        path: "/participants",
        element: <ViewAttendee />,
    },
    {
        path: "/create-event",
        element: <CreateEvent />,
    },
    {
        path: "/register-attendee",
        element: <RegisterAttendee />,
    },
    {
        path: "/update-event",
        element: <UpdateEvent />,
    },
    {
        path: "/update-attendee",
        element: <UpdateAttendee />,
    }
]
)
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)