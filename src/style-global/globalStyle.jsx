import { createGlobalStyle } from 'styled-components'



const GlobalStyle = createGlobalStyle`

    *{
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        border: none;
        text-transform: capitalize;
        transition: all .2s linear;
    }
    :root {
        --red: #e60000;
        --black: #222;
        --white: #fff;
        --light-color: #666;
        --light-bg: #eee;
        --border: .2rem solid var(--black);
        --box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    }

    @keyframes fadeIn {
        0%{
            opacity: 0;
            transform: translateY(-4rem) scale(.4)
        }
    }
    @keyframes clip1{
        0%{clip-path: polygon(0% 0%, 0% 100%, 93% 100%, 0 73%, 98% 100%, 0 10%, 100% 100%, 0 100%, 100% 100%, 100% 0);}
        100%{clip-path: polygon(0% 0%, 0% 100%, 98% 100%, 69% 0, 99% 100%, 88% 0, 100% 100%, 0 100%, 100% 100%, 100% 0);}
    }



    html{
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-behavior: smooth;
        scroll-padding-top: 7rem;

        &::-webkit-scrollbar{
            width: 1rem;
        }

        &::-webkit-scrollbar-track{
            background: transparent;
        }

        &::-webkit-scrollbar-thumb{
            background: var(--red);
            border-radius: .5rem;
        }
    }

    section{
        padding: 3rem 9%;
    }

    .heading{
        position: relative;
        text-align: center;
        margin-bottom: 5rem;
        color: var(--black);
        font-size:5rem;
        font-weight: 600;

        &::before{
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            bottom: 0;
            height: .1rem;
            background: var(--black);
            transform: translateY(-50%);
        }

        span{
            color: var(--red);
        }
    }

    .btn{
        display: inline-block;
        font-size: 1.7rem;
        background: var(--red);
        color: var(--white);
        padding: 1rem 3rem;
        margin-top: 1rem;
        box-shadow: var(--box-shadow);
        cursor: pointer;

        &:hover{
            transform: scaleX(1.1);
            background: var(--red);
            color: var(--white);
        }
    }

    @media (max-width: 991px){

        html{
            font-size: 55%;
        }

        .header{
            padding: 1.5rem 2rem;
        }

        section{
            padding: 3rem 2rem;
        }

    }

    @media (max-width: 450px){

        html{
            font-size: 50%;
        }

    }

`
export default GlobalStyle
