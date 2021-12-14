import styled from 'styled-components'
import messageImg from '../../images/message-bg.png'

function Message() {
    return (
        <MessageStyled id="message">
        
            <form action="">
                <h3>get in touch</h3>

                <input type="text" placeholder="full name" className="box" />
                <input type="email" placeholder="email" className="box" />
                <input type="number" placeholder="phone" className="box" />
                <textarea name="" placeholder="message" className="box" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="send message" className="btn" />

            </form>

        </MessageStyled>
    )
}

const MessageStyled = styled.section`
    background: url(${messageImg}) no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    form{
        margin: 2rem auto;
        background: var(--white);
        padding: 2rem;
        text-align: center;
        max-width: 40rem;
        box-shadow: var(--box-shadow);

        h3{
            font-size: 3rem;
            color: var(--black);
        }

        .box{
            display: flex;
            flex-direction: column;
            width: 100%;
            border-bottom: var(--border);
            margin: .7rem 0;
            padding: 1.5rem 0;
            text-transform: none;
            font-size: 1.6rem;
            color: var(--light-color);

            &:focus{
                border-color: var(--red);
            }
        }

        textarea{
            height: 15rem;
            resize:none;
        }
    }
`

export default Message
