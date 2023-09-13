import styled from 'styled-components'

const TopBox = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1300px;
`

const Component = ({ children, className }) => {
    return (
        <TopBox className={className}>
            <Box>
                {children}
            </Box>
        </TopBox>
    )
}

export default Component