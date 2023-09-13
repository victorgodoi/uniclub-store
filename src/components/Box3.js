import styled from "styled-components";
import Content from "./Content";
import Card from "./Card";

const Box = styled(Content)`
    > div{
        flex-direction: column;
    }
`

const DivTitle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
`

const Title = styled.a`
    color: #222;
    font-size: 36px;
    font-weight: 300;
    text-transform: uppercase;
`
const Line = styled.div`
    background-color: #000;
    width: 95px;
    height: 1px;
    margin-top: 30px;

`
const BoxCard = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 40px 25px;

`

const BoxButton = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 100px;
    //tirar depois 
    margin-bottom: 200px;

`

const Button = styled.button`
    width: 288px;
    height: 69px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #000;
    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 16px;
    font-weight: 600;
    line-height: 225%;
    letter-spacing: 0.96px;
    text-transform: uppercase;
`

const Component = () => {
    return (
        <Box>
            <DivTitle>
                <Title>new arrivals</Title>
                <Line />
            </DivTitle>
            <BoxCard>
                {[...Array(8).keys()].map(item => {
                    return (
                        <Card />
                    )
                })}
            </BoxCard>
            <BoxButton>
                <Button>View all products</Button>
            </BoxButton>
        </Box>

    )

}

export default Component