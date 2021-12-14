import { Link } from "react-router-dom"
import styled from "styled-components"
import img1 from '../../images/gallery-img-1.jpg'
import img2 from '../../images/gallery-img-2.jpg'
import img3 from '../../images/gallery-img-3.jpg'
import img4 from '../../images/gallery-img-4.jpg'
import img5 from '../../images/gallery-img-5.jpg'
import img6 from '../../images/gallery-img-6.jpg'
import { grid } from "../../style-global/minxins"

const gallery = [
    {
        id: 1,
        img: img1,
        title: "merry christmas",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, neque.",
    },
    {
        id: 2,
        img: img2,
        title: "merry christmas",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, neque.",
    },
    {
        id: 3,
        img: img3,
        title: "merry christmas",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, neque.",
    },
    {
        id: 4,
        img: img4,
        title: "merry christmas",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, neque.",
    },
    {
        id: 5,
        img: img5,
        title: "merry christmas",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, neque.",
    },
    {
        id: 6,
        img: img6,
        title: "merry christmas",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, neque.",
    }
]

function Gallery() {
    return (
        <GalleryStyled id="gallery">
        
            <h1 className="heading">our <span>gallery</span> </h1>

            <div className="box-container">

                {gallery.map((item) => (

                    <div key={item.id} className="box">
    
                        <div className="image">
                            <img src={item.img} alt="" />

                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <Link to="/" className="btn">read more</Link>
                            </div>
                        </div>

                    
                    </div>

                ))}



            </div>

        </GalleryStyled>
    )
}

const GalleryStyled = styled.section`
    .box-container{
        ${grid({ value: "31rem"})}

        .box{
            overflow: hidden;
            box-shadow: var(--box-shadow);
            &:hover > .image .content{
               display: flex;
            }

            .image{
                position: relative;
                height: 100%;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .content{
                    width: 100%;
                    height: 100%;
                    background: var(--light-bg);
                    opacity: .9;
                    display: flex;
                    flex-flow: column;
                    text-align: center;
                    align-items:center;
                    justify-content: center;
                    top: 0;
                    left: 0;
                    position: absolute;
                    border: var(--border);
                    display: none;

                    h3{
                        font-size: 2.5rem;
                        color: var(--black);
                        font-weight: 500;
                        animation: fadeIn .2s linear backwards;
                    }

                    p{
                        font-size: 1.5rem;
                        color: var(--light-color);
                        line-height: 2;
                        padding: 1rem;
                        animation: fadeIn .2s linear backwards .4s;
                    }

                    .btn{
                        animation: fadeIn .2s linear backwards .6s;
                    }
                }
            }
        }
    }
`

export default Gallery
