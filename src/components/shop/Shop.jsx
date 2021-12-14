import { Link } from "react-router-dom"
import styled from "styled-components"
import { grid } from "../../style-global/minxins"
import img1 from "../../images/product-1.png"
import img2 from "../../images/product-2.png"
import img3 from "../../images/product-3.png"
import img4 from "../../images/product-4.png"
import img5 from "../../images/product-5.png"
import img6 from "../../images/product-6.png"

const products = [
    {
        id: 1,
        img: img1,
        name: "chirtmas special",
        price: "$189.99",
        sale: "$149.99",
    },
    {
        id: 2,
        img: img2,
        name: "chirtmas special",
        price: "$189.99",
        sale: "$149.99",
    },
    {
        id: 3,
        img: img3,
        name: "chirtmas special",
        price: "$189.99",
        sale: "$149.99",
    },
    {
        id: 4,
        img: img4,
        name: "chirtmas special",
        price: "$189.99",
        sale: "$149.99",
    },
    {
        id: 5,
        img: img5,
        name: "chirtmas special",
        price: "$189.99",
        sale: "$149.99",
    },
    {
        id: 6,
        img: img6,
        name: "chirtmas special",
        price: "$189.99",
        sale: "$149.99",
    },
]

function Shop() {
    return (
        <ShopStyled id="shop">
        
            <h1 className="heading">our <span>shop</span> </h1>

            <div className="box-container">

                {products.map((item) => (
                    
                    <div key={item.id} className="box">

                        <div className="image">
                            <img src={item.img} alt="" />
                        
                            <div className="icons">
                                <Link to="/" className="fas fa-eye"></Link>
                                <Link to="/" className="fas fa-heart"></Link>
                                <Link to="/" className="fas fa-share"></Link>
                            </div>
                        </div>
                        
                        <div className="content">
                            <h3>{item.name}</h3>
                            <div className="price">
                                {item.sale}
                                <span>{item.price}</span>
                            </div>
                            <a href="/" className="btn"> add to cart </a>
                        </div>

                    </div>

                ))}


            </div>

        </ShopStyled>
    )
}

const ShopStyled = styled.section`
    background: var(--light-bg);

    .box-container{
        ${grid({ value: "31rem" })};

        .box{
            border: var(--border);
            text-align: center;
            background: var(--white);
            box-shadow: var(--box-shadow);

            .image{
                position: relative;
                overflow: hidden;
                &:hover > .icons{
                    left: 2rem;
                }

                &:hover > img{
                    transform: scale(1.1);
                }
                
                img{
                    height: 25rem;
                    object-fit: cover;
                }

                .icons{
                    position: absolute;
                    top: 2rem;
                    left: -5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    a{
                        display: block;
                        color: var(--black);
                        height: 5rem;
                        width: 5rem;
                        line-height: 5rem;
                        font-size: 2rem;
                        border: var(--border);

                        &:hover{
                        background: var(--red);
                        color: var(--white);
                        }
                    }
                }
            }

            .content{
                h3{
                    font-size: 2rem;
                    color: var(--black);
                    font-weight: 300;
                    padding-top: 1rem;
                }

                .price{
                    color: var(--red);
                    font-size: 2rem;
                    font-weight: bolder;
                    padding: 1rem 0;

                    span{
                        color: var(--light-color);
                        font-size: 1.4rem;
                        padding-left: 1rem;
                    }
                }

                a{
                    margin-bottom: 2rem;
                }
            }

        }
    }
`

export default Shop
