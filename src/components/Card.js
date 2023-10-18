import styled from "styled-components";
import { Skeleton } from '@chakra-ui/react'

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

const Component = ({ text, preco, img, loading }) => {

    if (loading) {
        return (
            <Box>
                <Skeleton height='440px' width='290px' />
                <MiniBox>
                    <Skeleton height='31px' width='60%' />
                    <Skeleton height='31px' width='20%' />
                </MiniBox>
            </Box>
        )
    } else {
        return (
            <Box>
                <img src={img} />
                <MiniBox>
                    <Text>{text}</Text>
                    <Number>R${preco?.toString()?.replace('.', ',')}</Number>
                </MiniBox>
            </Box>
        )
    }
}

export default Component