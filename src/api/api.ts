// Core
import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://default.com',
    // withCredentials: true,
    headers: {
        "API-KEY" : "def"
    },
})

export enum ResponseResultCodeType {
    success = 0,
    error = 1,
}