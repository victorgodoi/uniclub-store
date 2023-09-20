import styled from "styled-components";
import Banner from "../images/BannerBox5.png"
import Button from "./Button";

const DivBox = styled.div`
    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 500px;
    width: 100%;
    //tirar depois
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DivContent = styled.div`
    width: 990px;
    display: flex;
    gap: 185px;
`

const Title = styled.p`
    color: #FFF;
    font-family: Playfair Display;
    font-size: 52px;
    line-height: 120%;
    letter-spacing: -2.6px;

    span{
        font-weight: 700;
        font-style: italic;
    }
`
const SubTitle = styled.p`
    margin-top: 20px;
    color: #A1A1A1;
    font-family: Jost;
    font-size: 17px;
    line-height: 150%;
`

const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #D8D8D8;
    width: 350px;
    height: 57px;
    padding: 0 10px;
    outline: none;
    font-size: 16px;
    font-family: Jost;
`

const Button02 = styled(Button)`
    margin-top: 25px;
    width: 372px;
`

const Component = () => {
    return (
        <DivBox>
            <DivContent>
                <div>
                    <Title>Get 20% <span>OFF</span> on your first purchase</Title>
                    <SubTitle>Sign Up for our newsletter and never miss any offers</SubTitle>
                </div>
                <div>
                    <Input placeholder="Your email address" />
                    <Button02>Subscribe now</Button02>
                </div>
            </DivContent>
        </DivBox>

    )
}

export default Component