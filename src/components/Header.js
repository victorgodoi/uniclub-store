import styled from 'styled-components'

const Header = styled.header`
    height: 130px;
    width: 100%;
    background-color: #cacaca;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    max-width: 1480px;
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    div {
        display: flex;
        align-items: center;
    }

`

const Logo = styled.p`
    color: #000;
    font-size: 27px;
    font-weight: 700;
    letter-spacing: -1.08px;
    text-transform: uppercase;
    margin-right: 70px;
`

const Menu = styled.ul`
    display: flex;
    gap: 55px;
    li {
        color: #000;
        font-family: Jost;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }

`




const Component = () => {
    return (
        <Header>
            <Content>
                <div>
                    <Logo>uniclub</Logo>
                    <nav>
                        <Menu>
                            <li>home</li>
                            <li>shop</li>
                            <li>Hoodies</li>
                            <li>T-shirts</li>
                            <li>accessories</li>
                            <li>jackets</li>
                        </Menu>
                    </nav>
                </div>
                <div>PEDIR AJUDA PQ OS ICONES NAO SAO APENAS FOTOS!!!</div>
            </Content>
        </Header>
    )
}


export default Component