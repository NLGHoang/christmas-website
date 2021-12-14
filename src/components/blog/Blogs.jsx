import { Link } from "react-router-dom"
import styled from "styled-components"
import img1 from "../../images/blog-1.jpg"
import img2 from "../../images/blog-2.jpg"
import img3 from "../../images/blog-3.jpg"
import { grid } from "../../style-global/minxins"

const blogs = [
    {
        id: 1,
        img: img1,
        date: 12,
        month: "jan",
        user: "admin",
        title: "blog title goes here",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nobis eaque illo nulla, fugit consequuntur.",
    },
    {
        id: 2,
        img: img2,
        date: 10,
        month: "jan",
        user: "hoang",
        title: "blog title goes here",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nobis eaque illo nulla, fugit consequuntur.",
    },
    {
        id: 3,
        img: img3,
        date: 11,
        month: "jan",
        user: "dream",
        title: "blog title goes here",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nobis eaque illo nulla, fugit consequuntur.",
    },
]

function Blogs() {
    return (
        <BlogsStyled id="blogs">
        
            <h1 className="heading">Out <span>Daily blogs</span></h1>

            <div className="box-container">

                {blogs.map((item) => (

                    <div key={item.id} className="box">
    
                        <div className="image">
                            <img src={item.img} alt="" />
                        </div>

                        <div className="content">
                            <div className="date">
                                <h3>{item.date}</h3>
                                <span>{item.month}</span>
                            </div>
                            <Link to="/" className="user"> <i className="fas fa-user"></i> by {item.user} </Link>
                            <Link to="/" className="title"> {item.title}... </Link>
                            <p>{item.text}</p>
                            <Link to="/" className="btn">read more</Link>

                        </div>
    
                    </div>
                ))}


            </div>

        </BlogsStyled>
    )
}

const BlogsStyled = styled.section`
    .box-container{
        ${grid({ value: "31rem" })}

        .box{
            border: var(--border);
            box-shadow: var(--box-shadow);
            &:hover > .content{
                .date{
                    transform: translateX(calc(-3rem * 1));
                }

                .user{
                    transform: translateX(calc(3rem * 1));
                }
            }
            
            .image{
                height: 30rem;
                width: 100%;
                border-bottom: var(--box-shadow);
                overflow: hidden;
                &:hover > img{
                    transform: scale(1.1);
                }

                img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }

            .content{
                padding: 2rem;
                position: relative;

                .date{
                    position: absolute;
                    top: -4rem;
                    right: 3rem;
                    height: 8rem;
                    width: 8rem;
                    border: .5rem solid var(--white);
                    border-radius: 50%;
                    background: var(--red);
                    text-align: center;
                    padding-top: 1rem;
                    transition: .5s;
                    &::before{
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: -25px;
                        width: 20px;
                        height: 20px;
                        background: transparent;
                        border-top-left-radius: 20px;
                        box-shadow: 5px -15px 0 0 var(--white);
                    }
                    &::after{
                        content: "";
                        position: absolute;
                        top: 50%;
                        right: -15px;
                        width: 20px;
                        height: 20px;
                        background: transparent;
                        border-top-right-radius: 20px;
                        box-shadow: 5px -15px 0 0 var(--white);
                    }

                    h3{
                        font-size: 2.7rem;
                        line-height: 1;
                        color: var(--white);
                    }
                    span{
                        font-size: 1.5rem;
                        color: var(--white);
                    }
                }

                .user{
                    display: block;
                    font-size: 1.5rem;
                    color: var(--light-color);
                    padding-bottom: 1rem;
                    transition: .5s;

                    i{
                        margin-right: .5rem;
                        color: var(--red);
                    }
                }

                .title{
                    font-size: 2rem;
                    color: var(--black);
                    &:hover{
                        color:var(--red);
                    }
                }

                p{
                    font-size: 1.5rem;
                    color: var(--light-color);
                    line-height: 2;
                    padding: 1rem 0;
                }
            }
        }
    }
`

export default Blogs
