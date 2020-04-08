import React from 'react'

const Search = (props) => {
    
    return (
        <div>
            <div className="search-navigation">
                <ul>
                    <li><a className="search-type-active" href="#">Basic Searck></a></li>
                    <li><a className="search-type-inactive" href="#">Advanced Search</a></li>
                </ul>
            </div>
            <div className="search-container">
                <form className="search-wrapper" onSubmit={props.handleFormSubmit}>
                    <i className="search-icon fas fa-search"></i>
                    <input id="people-search-input" name="search" type="search" className="search-input" placeholder="John Smith / Джон Смит" />
                    <input id="people-search-button" type="submit" value="Search" className="search-button" />
                </form>
            </div>
        </div>
    )
}

export default Search