import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { grid } from '../../style-global/minxins'

function Footer() {
    return (
        <FooterStyled>
        
            <div className="box-container">

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#home"> <i className="fas fa-angle-right"></i> home </a>
                    <a href="#about"> <i className="fas fa-angle-right"></i> about </a>
                    <a href="#shop"> <i className="fas fa-angle-right"></i> shop </a>
                    <a href="#gallery"> <i className="fas fa-angle-right"></i> gallery </a>
                    <a href="#message"> <i className="fas fa-angle-right"></i> message </a>
                    <a href="#blogs"> <i className="fas fa-angle-right"></i> blogs </a>
                </div>

                <div className="box">
                    <h3>extra links</h3>
                    <Link to="/"> <i className="fas fa-angle-right"></i> my favorite </Link>
                    <Link to="/"> <i className="fas fa-angle-right"></i> my order </Link>
                    <Link to="/"> <i className="fas fa-angle-right"></i> my wishlist </Link>
                    <Link to="/"> <i className="fas fa-angle-right"></i> private policy </Link>
                    <Link to="/"> <i className="fas fa-angle-right"></i> terms of use </Link>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <Link to="/"> <i className="fas fa-phone"></i> +123 345 789 </Link>
                    <Link to="/"> <i className="fas fa-phone"></i> +456 789 123 </Link>
                    <Link to="/"> <i className="fas fa-envelope"></i> hoang.nlgh@gmail.com </Link>
                    <Link to="/"> <i className="fas fa-map-marker-alt"></i> TPHCM, VietNam </Link>

                    <div className="share">
                        <Link to="/" className="fab fa-facebook-f"> </Link>
                        <Link to="/" className="fab fa-twitter"> </Link>
                        <Link to="/" className="fab fa-instagram"> </Link>
                        <Link to="/"  className="fab fa-github"> </Link>
                    </div>
                </div>

                <div className="box">
                    <h3>newsletter</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, et!</p>
                    <form action="">
                        <input type="email" placeholder="enter your email" className="email" />
                        <input type="submit" value="subscribe" className="btn" />
                    </form>
                </div>

            </div>

            <div className="credit"> create by <span>mr. web designer</span> | all rights reserved</div>

        </FooterStyled>
    )
}

const FooterStyled = styled.section`
    padding-bottom: 0;
    .box-container{
        ${grid({ value: "16rem" })}

        .box{
            h3{
                font-size: 2rem;
                color: var(--black);
                padding-bottom: 1rem;
            }

            a{
                display: block;
                padding: 1rem 0;
                font-size: 1.5rem;
                color: var(--black);
                &:hover{
                    color: var(--red);
                }

                &:hover > i{
                    margin-right: 2rem;
                }
                
                i{
                    color: var(--red);
                    margin-right: 1rem;
                }
            }

            p{
                font-size: 1.5rem;
                color: var(--light-color);
                line-height: 2;
            }

            form{
                display: flex;
                flex-direction: column;

                .email{
                    width: 100%;
                    border: var(--border);
                    padding: 1rem;
                    text-transform: none;
                    font-size: 1.5rem;
                    margin: 1rem 0;
                }

                .btn{
                    display: block;
                    width: 20rem;
                }

            }

            .share{
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;
                align-items: center;

                a{
                    margin-top: 2rem;
                    height: 5rem;
                    width: 5rem;
                    line-height: 3rem;
                    font-size: 2rem;
                    border: var(--border);
                    border-radius: 50%;
                    text-align: center;
                    &:hover {
                        background: var(--red);
                        color: var(--white);
                    }
                }
            }
        }
    }

    .credit{
        border-top: .1rem solid var(--red);
        padding: 3rem 0;
        margin-top: 2rem;
        text-align: center;
        font-size: 2rem;
        color: var(--light-color);

        span{
            color: var(--red);
        }
    }

    @media (max-width: 450px) {

        .box-container{
            display: inline-block;
            margin-left: 2rem;

            .box:not(:first-child){
                h3{
                    padding-top: 2rem;
                }

                .btn{
                    width: 100% !important;
                }
            }
        }

        .credit{
            font-size: 1.5rem;
        }
    }
`

export default Footer
