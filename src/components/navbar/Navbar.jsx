import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchForm from '../searchForm/SearchForm'

function Navbar() {

    const [searchToggle, setSearchToggle] = useState(false)
    const [barsToggle, setBarsToggle] = useState(false)

    const iconRef = useRef()
    const BarsRef = useRef()

    const handleToggleBar = () => {
        setBarsToggle(!barsToggle)

        if(!BarsRef.current) return;
    
        BarsRef.current.classList.toggle('fa-times')
        setSearchToggle(false)
        iconRef.current.classList.remove('fa-times')
    }

    const handleSearch = () => {
        setSearchToggle(!searchToggle)

        if(!iconRef.current) return;
    
        iconRef.current.classList.toggle('fa-times')
        setBarsToggle(false)
        BarsRef.current.classList.remove('fa-times')
    }

    
    const handleScroll = () => {
        iconRef.current.classList.remove('fa-times')
        BarsRef.current.classList.remove('fa-times')
        setSearchToggle(false)
        setBarsToggle(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <NavbarStyled>
            <Link to="/" className="logo"> <i className="fas fa-gifts"></i> gifts </Link>

            <nav className={`navbar ${barsToggle ? "active" : ""}`}>
                <a href="#home"> home </a>
                <a href="#about"> about </a>
                <a href="#shop"> shop </a>
                <a href="#gallery"> gallery </a>
                <a href="#message"> message </a>
                <a href="#blogs"> blogs </a>
            </nav>

            <div className="icons">
                <div 
                    ref = {BarsRef}
                    id="menu-btn" 
                    className="fas fa-bars"
                    onClick={handleToggleBar}
                >
                </div>
                <div 
                    ref = {iconRef}
                    id="search-btn" 
                    className="fas fa-search" 
                    onClick={handleSearch}
                >
                </div>
                <Link to="/" className="fas fa-heart"></Link>
                <Link to="/" className="fas fa-shopping-cart"></Link>
            </div>

            <SearchForm searchToggle={searchToggle}/>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo{
        font-size: 2.5rem;
        color: var(--black);
        font-weight: bolder;

        i{
            color: var(--red);
        }
    }

    .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            margin: 0 1.5rem;
            font-size: 1.7rem;
            color: var(--black);
            position: relative;

            &:hover{
                color: var(--red);
            }


            &::before{
                content: "";
                position: absolute;
                left: auto;
                right: 0;
                bottom: 0;
                height:.1rem;
                width: 0;
                background: var(--red);
                transition: .3s linear;
            }
            &:hover::before{
                width: 100%;
                left: 0;
                right: auto;
            }
        }
    }

    .icons {

        div,a{
            height: 4.5rem;
            width: 4.5rem;
            line-height: 4.5rem;
            font-size: 1.7rem;
            color: var(--black);
            border-radius: .5rem;
            background: var(--light-bg);
            text-align: center;
            cursor: pointer;
            &:hover{
                background: var(--red);
                color: var(--white);
            }
            
            &:not(:first-child){
                margin-left:.3rem;
            }
        }

        #menu-btn{
            display: none;
        }
    }

    @media (max-width: 768px){

        .navbar{
            position: absolute;
            top: 99%;
            left: 0;
            right: 0;
            background: var(--white);
            border-top: var(--border);
            border-bottom: var(--border);
            display: block;
            padding: 0 2rem;
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

            &.active{
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }

            a{
                display: block;
                font-size: 2rem;
                margin: 2rem;
                width: fit-content;

            }
        }

        .icons #menu-btn{
            display: inline-block;
        }

    }
`

export default Navbar

