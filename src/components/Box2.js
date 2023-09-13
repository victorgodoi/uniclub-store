import styled from 'styled-components'
import carrinho from '../images/carrinho.svg'
import cifrao from '../images/cifrao.svg'
import escudo from '../images/escudo.svg'
import medalha from '../images/medalha.svg'
import Content from './Content'

const Box = styled(Content)`
    padding-top: 170px;
    //tirar depois
    margin-bottom: 150px;

    > div {
        gap: 110px;
    }
`
const Title = styled.p`
    color: #222;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 119.682%;
    text-transform: capitalize;
    margin-top: 30px;
    margin-bottom: 20px;
`

const SubTitle = styled.p`
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
                <img src={carrinho} width='35px' height='35px' />
                <Title>Free Delivery</Title>
                <SubTitle>Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</SubTitle>
            </div>
            <div>
                <img src={escudo} width='35px' height='35px' />
                <Title>100% secure payment</Title>
                <SubTitle>Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</SubTitle>
            </div>
            <div>
                <img src={medalha} width='35px' height='35px' />
                <Title>Quality guarantee</Title>
                <SubTitle>Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</SubTitle>
            </div>
            <div>
                <img src={cifrao} width='35px' height='35px' />
                <Title>guaranteed savings</Title>
                <SubTitle>Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.</SubTitle>
            </div>
        </Box>
    )
}

export default Component