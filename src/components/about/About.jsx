import styled from "styled-components"
import aboutImg from "../../images/about-img.png"

function About() {
    return (
        <AboutStyled id="about">

            <div className="image">
                <img src={aboutImg} alt="" />
            </div>

            <div className="content">
                <div className="box">
                    <h3>christmas sales is on</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi mollitia culpa saepe doloribus delectus dignissimos dolores, ab reprehenderit aliquam voluptatem iure excepturi cumque animi, velit soluta ipsum error quaerat aliquid porro iusto tenetur maxime et! Vitae dignissimos temporibus in sit.</p>
                    <a href="/" className="btn">read more</a>
                </div>

                <div className="icons-container">
                    <div className="icon">
                        <i className="fas fa-tree"></i>
                        <h3>christmas trees</h3>
                    </div>
                    <div className="icon">
                        <i className="fas fa-cookie"></i>
                        <h3>christmas cookies</h3>
                    </div>
                    <div className="icon">
                        <i className="fas fa-gifts"></i>
                        <h3>christmas gifts</h3>
                    </div>
                </div>
            </div>

        </AboutStyled>
    )
}

const AboutStyled = styled.section`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    .image{
        flex: 1 1 42rem;
        padding-bottom: 5rem;
        padding-right: 5rem;

        img{
            width: 100%;
            box-shadow: 4rem 4rem 0 var(--light-bg);
        }
    }

    .content{
        flex: 1 1 42rem;

        .box{
            background: var(--light-bg);
            padding: 3rem;

            h3{
                font-size: 2.5rem;
                color: var(--black);
            }

            p{
                font-size: 1.4rem;
                color: var(--light-color);
                line-height: 2;
                padding: 1rem 0;

            }
        }

        .icons-container{
            display:flex;
            flex-wrap: wrap;
            align-items: flex-end;
            gap: 2rem;
            margin-top: 2rem;

            .icon{
                flex: 1 1 16rem;
                padding: 2rem;
                background: var(--light-bg);
                text-align: center;

                i{
                    font-size: 5rem;
                    color: var(--red);
                }

                h3{
                    padding-top: 1rem;
                    font-size: 2rem;
                    color: var(--black);
                    font-weight: 300;
                }
            }
        }
    }
`

export default About
