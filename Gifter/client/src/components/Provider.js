import React, { useState, createContext } from "react"

export const ItemContext = createContext()

export const ItemProvider = (props) => {
    const [searchTerms, setSearchTerms] = useState()

    return (
        <ItemContext.Provider value={{
            searchTerms, setSearchTerms
        }}>
            {props.children}
        </ItemContext.Provider>
    )
}