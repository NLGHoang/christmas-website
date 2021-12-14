// import { useState } from 'react'
import './searchForm.scss'

function SearchForm({ searchToggle }) {

    return (
        <form 
            action="" 
            className={`searchForm ${searchToggle ? "activeSearchToggle" : ""}`}
        >
            <input type="search" placeholder="search here..." id="search-box" />
            <label htmlFor="search-box" className="fas fa-search"></label>
        </form>
    )
}

export default SearchForm
