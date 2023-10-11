import styled from 'styled-components'
import iconCarrinho from '../images/icon-carrinho.svg'
import iconFavoritos from '../images/icon-favoritos.svg'
import iconPerfil from '../images/icon-perfil.svg'
import { NavLink } from "react-router-dom"
import { useMatch } from 'react-router-dom';

const Header = styled.header`
    height: 130px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => !props.homepage && '#cacaca'};
`

const Content = styled.div`
    max-width: 1480px;
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    > div {
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
    gap: 45px;
`

const Link = styled(NavLink)`
    text-decoration: none;
    color: #000;
    font-family: Jost;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    &.active {
        border-radius: 15px;
        border: 2px solid #282828;
        padding: 3px 10px;
    }
`

const AccountMenu = styled.div`
    display: flex;
    gap: 55px;

    > div {
        position: relative;
    }
`

const Circle = styled.div`
    background-color: black;
    width: 17px;
    height: 17px;
    border-radius: 10px;
    color: white;
    font-size: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10px;
    left: 10px;
`



const Component = () => {

    const isMainRoute = useMatch("/");

    return (
        <Header homepage={Boolean(isMainRoute)}>
            <Content>
                <div>
                    <Logo>uniclub</Logo>
                    <nav>
                        <Menu>
                            <li><Link to='/'>home</Link></li>
                            <li><Link to='/products'>shop</Link></li>
                            <li><Link to='/hoodies'>Hoodies</Link></li>
                            <li><Link to='/t-shirts'>T-shirts</Link></li>
                            <li><Link to='/accessories'>accessories</Link></li>
                            <li><Link to='/jackets'>jackets</Link></li>
                        </Menu>
                    </nav>
                </div>
                <AccountMenu>
                    <img src={iconPerfil} />
                    <div>
                        <img src={iconFavoritos} />
                        <Circle>12</Circle>
                    </div>
                    <div>
                        <img src={iconCarrinho} />
                        <Circle>3</Circle>
                    </div>
                </AccountMenu>
            </Content>
        </Header>
    )
}


export default Component