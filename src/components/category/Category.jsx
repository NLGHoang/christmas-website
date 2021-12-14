import styled from 'styled-components'
import { grid } from '../../style-global/minxins'
import img1 from '../../images/category-1.png'
import img2 from '../../images/category-2.png'
import img3 from '../../images/category-3.png'
import img4 from '../../images/category-4.png'
import img5 from '../../images/category-5.png'
import img6 from '../../images/category-6.png'

const category = [
    {
        img: img1,
        title: "christmas decorations",
    },
    {
        img: img2,
        title: "christmas decorations",
    },
    {
        img: img3,
        title: "christmas decorations",
    },
    {
        img: img4,
        title: "christmas decorations",
    },
    {
        img: img5,
        title: "christmas decorations",
    },
    {
        img: img6,
        title: "christmas decorations",
    },

]

function Category() {
    return (
        <CategoryStyled>

            <div className="container">

                {category.map((item,i)=> (
                    <a key={i} href="/" className="box">
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                    </a>
                ))}
            

            </div>

        </CategoryStyled>
    )
}

const CategoryStyled = styled.section`

    .container{

        ${grid({ value: "16rem" })};
    
        .box{
            text-align: center;
            &:hover > h3{
                color: var(--red);
            }

            img{
                height: 14rem;
                margin-bottom: 1rem;
            }
            h3{
                color: var(--black);
                font-size: 1.7rem;
                font-weight: 300;
            }
        }
    }
`

export default Category
