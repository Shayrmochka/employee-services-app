import React from 'react'
import { Search } from './Search'

export const SearchContainer = (props) => {

    return <Search handleFormSubmit={props.propsSearch}/>
}