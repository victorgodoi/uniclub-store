import styled from "styled-components";
import Camiseta01 from '../images/camiseta01.png';

const Box = styled.div`
    max-width: 295px;
    gap: 40px 25px;
`
const MiniBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const Text = styled.p`
    color: #000;
    font-size: 21px;   
    text-transform: capitalize;
`
const Number = styled.p`
    color: #747474;
    font-size: 21px;
    text-transform: capitalize;
`

const Component = () => {
    return (
        <Box>
            <img src={Camiseta01} />
            <MiniBox>
                <Text>Seven Zero Five</Text>
                <Number>$30.00</Number>
            </MiniBox>
        </Box>
    )
}

export default Component