import styled from "styled-components";
import Content from "./Content";
import Card from "./Card";
import Button from "./Button";

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

const Title = styled.p`
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