import styled from "styled-components";
import Content from "./Content";
import Card from "./Card";
import Button from "./Button";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate, useMatch } from "react-router-dom"



const supabase = createClient("https://mabkxpvmoabhozufruai.supabase.co", process.env.REACT_APP_SECRET);


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

    const [produtos, atualizarProdutos] = useState([])
    const navigate = useNavigate()
    const isMainRoute = useMatch("/");

    const getData = async ({ quantidade }) => {
        const { data } = await supabase.from("uniclub").select().limit(quantidade);
        atualizarProdutos(data);
    }

    useEffect(() => {
        if (isMainRoute) {
            getData({ quantidade: 8 })
        } else {
            getData({ quantidade: null })
        }
    }, [isMainRoute])

    return (
        <Box>
            <DivTitle>
                <Title>{isMainRoute ? 'new arrivals' : 'Products'}</Title>
                <Line />
            </DivTitle>
            <BoxCard>
                {/* array para popular os cards de loading */}
                {produtos?.length === 0 && [...Array(10).keys()].map(() => <Card loading={true}></Card>)}
                {/* array populando os cards com os dados dos produtos */}
                {produtos?.map(produto => {
                    return (
                        <Card key={produto.id} text={produto.title} preco={produto.price} img={produto.image} />
                    )
                })}
            </BoxCard>
            {isMainRoute && (
                <BoxButton>
                    <Button onClick={() => navigate('/products')}>View all products</Button>
                </BoxButton>
            )}
        </Box>

    )

}

export default Component