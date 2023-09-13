import styled from "styled-components";
import Banner02 from "../images/banner02.png";
import Banner03 from "../images/banner03.png";
import Banner04 from "../images/banner04.png";

const TopBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Box = styled.div`
    max-width: 1710px;
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-bottom: 100px;
`

const DivBanner02 = styled.div`
    background-image: url(${Banner02});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 200px;
    width: 530px;

`

const DivBanner03 = styled.div`
    background-image: url(${Banner03});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 200px;
    width: 530px;

`

const DivBanner04 = styled.div`
    background-image: url(${Banner04});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 200px;
    width: 530px;

`

const Text = styled.p`
    color: #FFF;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    margin-top: 155px;
    margin-left: 50px;

`


const Component = () => {
    return (
        <TopBox>
            <Box>
                <DivBanner02>
                    <Text>Textrinted t-shirts</Text>
                </DivBanner02>
                <DivBanner03>
                    <Text>t-shirts</Text>
                </DivBanner03>
                <DivBanner04>
                    <Text>speak your mind</Text>
                </DivBanner04>
            </Box>
        </TopBox>
    )
}

export default Component