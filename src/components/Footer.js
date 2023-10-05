import styled from "styled-components";
import Facebook from '../images/Facebook.svg';
import Twitter from '../images/Twitter.svg';
import Pinterest from '../images/Pinterest.svg';
import Instagram from '../images/Instagram.svg';
import Youtube from '../images/Youtube.svg';
import Logo from '../images/logo.png';


const Content = styled.div`
    width: 100%;
    max-width: 80%;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    //height: 730px;
    align-items: center;

    &:last-of-type{
        border-top: 1px solid #333;
        padding-top: 40px;
        padding-bottom: 215px;
    }
`

const DivTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 85px;
    margin-top: 80px;
`

const DivDir = styled.div`
    grid-gap: 15px 0;
    display: grid;
    gap: 130px;
    grid-template-columns: repeat(3,1fr);
`

const Title = styled.li`
    color: #FFF;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
`

const List = styled.li`
    color: #A1A1A1;
    font-family: Jost;
    font-size: 17px;
    line-height: 214%;
    letter-spacing: 0.34px;
    text-transform: capitalize;
`

const IconList = styled.ul`
    display: flex;
    gap: 28px;
    align-items: center;

    li{
        &:first-of-type {
        padding-left: 7px;
    }
    }
`

const DivBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Text01 = styled.p`
    color: #A1A1A1;
    font-family: Jost;
    font-size: 17px;
    line-height: 214%;
    letter-spacing: 0.34px;
    span{
        font-weight: 700;
    }
`





const Component = () => {
    return (
        <footer>
            <Box>
                <Content>
                    <DivTop>
                        <div>
                            <img src={Logo} width='267px' height='60px' />
                            <IconList>
                                <li> <img src={Facebook} width='7px' height='20px' /> </li>
                                <li> <img src={Twitter} width='17px' height='20px' /> </li>
                                <li> <img src={Pinterest} width='16px' height='20px' /> </li>
                                <li> <img src={Instagram} width='15px' height='15px' /> </li>
                                <li> <img src={Youtube} width='18px' height='20px' /> </li>
                            </IconList>
                        </div>
                        <DivDir>
                            <ul>
                                <Title>Quick links</Title>
                                <List>Home</List>
                                <List>About us</List>
                                <List>Offers</List>
                                <List>Services</List>
                                <List>Contact us</List>
                            </ul>
                            <ul>
                                <Title>About</Title>
                                <List>How it work</List>
                                <List>our packages</List>
                                <List>promotions</List>
                                <List>refer a friend</List>
                            </ul>
                            <ul>
                                <Title>Help Centre</Title>
                                <List>Payments</List>
                                <List>Shipping</List>
                                <List>Product returns</List>
                                <List>FAQs</List>
                                <List>Checkout</List>
                                <List>other Issues</List>
                            </ul>
                        </DivDir>
                    </DivTop>
                </Content>
            </Box>

            <Box>
                <Content>
                    <DivBottom>
                        <Text01>© 2022 UNICLUB. All rights reserved.</Text01>
                        <Text01>Design by <span>TemplatesJungle</span></Text01>
                    </DivBottom>
                </Content>
            </Box>
        </footer >
    )
}

export default Component