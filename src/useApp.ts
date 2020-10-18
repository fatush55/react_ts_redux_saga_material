// Core
import {useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
// Actions
import { actionsApp } from './actions/app-action'
// Selector
import { getDef } from './selector/app-selector'


export const useApp = () => {
    const dispatch = useDispatch()
    const def = useSelector(getDef)

    useEffect(() => {
        !def && setTimeout(() => dispatch(actionsApp.watch_def()), 3000)
    })

    return {
        def
    }
}
