import styled from 'styled-components'
import ProductsList from '../components/ProductsList'


const Container = styled.div`
    padding-top: 250px;
    padding-bottom: 200px;
`



function Products() {
    return (
        <Container>
            <ProductsList />
        </Container>
    )
}

export default Products