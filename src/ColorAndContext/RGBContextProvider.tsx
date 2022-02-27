import {createContext, useReducer} from 'react'
import { reducer } from './reducer'
import { RBGContextType } from './types'

const initialState = {
    red: 0,
    green: 0,
    blue: 0
}

export const RGBContext = createContext<RBGContextType>(initialState as RBGContextType)

const RGBContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [rbg, dispatch] = useReducer(reducer, initialState)

    return (
        <RGBContext.Provider value={{...rbg, dispatch}}>
            {children}
        </RGBContext.Provider>
  )
}

export default RGBContextProvider