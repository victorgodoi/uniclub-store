import styled from 'styled-components'
import imgBanner from '../images/banner.png'
import Header from './Header'
import iconButton from '../images/iconButton.svg'

const Box = styled.div`
    background-color: black;
    position: absolute;
    top: 5%;
    left: 15%;
    width: 562px;
    height: 453px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;

    h1 {
        font-size: 117px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
        letter-spacing: -11.7px;
        text-transform: uppercase;
        color: #FFF;
    }

    h2 {
        color: #FFF;
        text-align: center;
        font-family: 'Jost';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;  
    }
`

const Button = styled.button`
    width: 265px;
    height: 44px;
    border-radius: 40px;
    border: 2px solid #FFF;
    background-color: black;
    color: #FFF;
    font-size: 15px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    display: flex;
    gap:10px;
    padding: 15px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    transition: all 0.5s;

    &:hover {
        cursor: pointer;
        color: #000;
        background-color: #FFF;

        img{
            filter: invert(1);
        }
    }

    img {
        width: 22px;
        height: 19px;
        transition: all 0.5s;
    }

`

const Component = () => {
    return (
        <div>
            <img src={imgBanner} width='100%' height='auto' />
            <Box>
                <h1>Street wears</h1>
                <h2>High quality cool tshirts for street fashion</h2>
                <Button>Start shopping <img src={iconButton} /></Button>
            </Box>
        </div>
    )
}

export default Component