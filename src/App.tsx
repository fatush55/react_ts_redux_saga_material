// Core
import React, { FC } from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import {useApp} from "./useApp"


const AppContainer: FC = () => {
    const { def } = useApp()

    return (
        <Router>
            App = {def}
            <Routes/>
        </Router>
    )
}

export const App: FC = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </React.StrictMode>
    )
}
