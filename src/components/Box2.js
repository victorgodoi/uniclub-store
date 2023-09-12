import styled from 'styled-components'
import carrinho from '../images/carrinho.svg'
import cifrao from '../images/cifrao.svg'
import escudo from '../images/escudo.svg'
import medalha from '../images/medalha.svg'

const Box = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 170px;
    max-width: 1300px;
    //tirar depois
    margin-bottom: 150px;

    > div {
        gap: 109px;
        height: 220px;
    }
`
const Title = styled.h1`
    color: #222;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 119.682%;
    text-transform: capitalize;
`

const SubTitle = styled.h2`
    color: #747474;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 188.5%;
    letter-spacing: 0.32px;
    text-transform: capitalize;
`



const Component = () => {
    return (
        <Box>
            <div>
                <img src={carrinho} width='34px' height='34px' />
                <h1>Free Delivery</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</h2>
            </div>
            <div>
                <img src={escudo} width='40px' height='40px' />
                <h1>100% secure payment</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</h2>
            </div>
            <div>
                <img src={medalha} width='40px' height='40px' />
                <h1>Quality guarantee</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</h2>
            </div>
            <div>
                <img src={cifrao} width='36px' height='36px' />
                <h1>guaranteed savings</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</h2>
            </div>
        </Box>
    )
}

export default Component