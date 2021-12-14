import styled from 'styled-components'
import Navbar from '../../components/navbar/Navbar';
import Slide from '../../components/slide/Slide';
import Category from '../../components/category/Category';
import About from '../../components/about/About';
import Shop from '../../components/shop/Shop';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import Message from '../../components/message/Message';
import Blogs from '../../components/blog/Blogs';
import Service from '../../components/service/Service'
import Footer from '../../components/footer/Footer'

function Homepage() {
    return (
        <HomepageStyled>
            <header className="header">
                
                <Navbar />
                
            </header>

            <Slide />

            <Category />

            <About />

            <Shop />

            <Banner />

            <Gallery />

            <Message />

            <Blogs />

            <Service />

            <Footer />

        </HomepageStyled>
    )
}

const HomepageStyled = styled.div`
    .header{
            position: sticky;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            box-shadow: var(--box-shadow);
            background: var(--white);
            padding: 1.5rem 9%;
        }
`

export default Homepage
