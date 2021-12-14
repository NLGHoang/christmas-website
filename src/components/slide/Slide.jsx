/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
// import './slide.scss'
import bg1 from '../../images/home-bg-1.png'
import bg2 from '../../images/home-bg-2.png'

const homeBg = [
    {
        id: 1,
        img: bg1,
        title: "merry christmas",
        titleSm: "upto 60% off"
    },
    {
        id: 2,
        img: bg2,
        title: "ho-ho-ho",
        titleSm: "happy holiday"
    },
]

function Slide() {

    const [curr, setCurr] = useState(0);
    const { length } = homeBg;
    
    const next = () => {
        setCurr(curr === length - 1 ? 0 : curr + 1);
    }
    const prev = () => {
        setCurr( curr === 0 ? length - 1 : curr - 1 );
    }
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() =>
            setCurr((prevIndex) =>
                prevIndex === homeBg.length - 1 ? 0 : prevIndex + 1
                ),
            8000
        );

    return () => {
      resetTimeout();
    };
  }, [curr]);

    if(!Array.isArray(homeBg) || length <= 0) return;

    return (
        <SlideStyled className="home" id="home">

        {homeBg.map((item, i)=>(

            <div 
                key={i} 
                className={i === curr ? "slide active" : "slide"} 
                style={{
                    background: `url(${item.img}) no-repeat`, backgroundSize: "cover", 
                    backgroundPosition: "center"
                }}
            >
                <div className="content">
                    <span>{item.title}</span>
                    <h3>{item.titleSm}</h3>
                    <a href="#" className="btn">shop now</a>
                </div>

            </div>

        ))}

            <div id="next-slide" onClick={next} className="fas fa-angle-right"></div>
            <div id="prev-slide" onClick={prev} className="fas fa-angle-left"></div>

        </SlideStyled>
    )
}

const SlideStyled = styled.section`
    position: relative;
    padding: 0;

    .slide{
        padding: 2rem;
        display:flex;
        min-height: 60vh;
        display: none;

        &.active{
            display: flex;
            animation: clip1 6s linear infinite;
        }

        .content{
            margin: auto;
            text-align: center;

            span{
                display: block;
                font-size: 3rem;
                color: var(--black);
                text-shadow: var(--box-shadow);
                animation: fadeIn .2s linear backwards;
            }

            h3{
                font-size: 4rem;
                color: var(--black);
                text-transform: uppercase;
                padding: 1rem 0;
                letter-spacing: .3rem;
                text-shadow: var(--box-shadow);
                animation: fadeIn .2s linear backwards .4s;
            }

            a{
                animation: fadeIn .2s linear backwards .6s;
            }
        }

    }

    #next-slide,
    #prev-slide{
        height: 5rem;
        width: 5rem;
        line-height: 4.5rem;
        font-size: 2rem;
        color: var(--black);
        border: var(--border);
        background: var(--white);
        box-shadow: var(--box-shadow);
        text-align: center;
        cursor: pointer;
        position: absolute;
        bottom: 2rem;
        right: 2rem;

        &:hover{
            background: var(--red);
            color: var(--white);
            border: none;
        }
    }
    #prev-slide{
        right: 8rem;
    }

    @media (max-width: 450px){

        .home .slide .content{
            h3{
                font-size: 3rem;
            }
            span{
                font-size: 2.5rem;
            }
        }

    }
`

export default Slide
