import styled from 'styled-components'
import img1 from '../../images/icon-1.png'
import img2 from '../../images/icon-2.png'
import img3 from '../../images/icon-3.png'
import { grid } from '../../style-global/minxins'

const services = [
    {
        id: 1,
        img: img1,
        title: "free delivery",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veritatis?"
    },
    {
        id: 2,
        img: img2,
        title: "secure payment",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veritatis?"
    },
    {
        id: 3,
        img: img3,
        title: "24/7 support",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veritatis?"
    },
]

function Service() {
    return (
        <ServiceStyled>
            {services.map((item) =>(
                <div key={item.id}>

                    <div className="box">
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                
                </div>

            ))}
            
        </ServiceStyled>
    )
}

const ServiceStyled = styled.section`
    ${grid({ value: "31rem"})}
    background: var(--red);
    .box{
        text-align: center;
        padding: 2rem;
        img{
            hight: 10rem;
        }
        h3{
            font-size: 2rem;
            color: var(--white);
            padding: 1rem 0;
        }
        p{
            font-size: 1.5rem;
            color: var(--white);
            line-height: 2;
        }
    }
`

export default Service
