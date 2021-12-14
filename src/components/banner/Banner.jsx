import styled from 'styled-components'
import bannerImg from '../../images/banner-bg.png'

function Banner() {
    return (
        <BannerStyled>
            
            <div className="content">
                <span>special offer</span>
                <h3>upto 50% offer</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quae possimus nulla earum consectetur voluptate.</p>
                <a href="/" className="btn">shop now</a>
            </div>

        </BannerStyled>
    )
}

const BannerStyled = styled.section`
    background: url(${bannerImg}) no-repeat;
    background-size: cover;
    background-position: center;

    .content{
        max-width: 40rem;
        background: var(--white);
        padding: 2rem;
        text-align: center;
        box-shadow: var(--box-shadow);
        margin: 10rem 0;

        span{
            font-size: 1.7rem;
            color: var(--red);
        }

        h3{
            font-size: 3rem;
            color: var(--black);
            padding: 1rem 0;
        }

        p{
            font-size: 1.5rem;
            color: var(--light-color);
            padding: 1rem 0;
            line-height: 2;
        }

    }

    @media (max-width:450px) {
        .content{
            margin: 3rem auto;

        }
    }
`
export default Banner
