import styled from 'styled-components'
import ProductsList from '../components/ProductsList'

const Conteiner = styled.div`
    margin-top: 250px;
    margin-bottom: 200px;

`



function Products() {
    return (
        <Conteiner>
            <ProductsList />
        </Conteiner>
    )
}

export default Products