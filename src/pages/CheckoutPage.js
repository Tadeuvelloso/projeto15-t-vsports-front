import axios from "axios";
import styled from "styled-components";


export default function CheckOut() {

    return (
        <Main>
            <ProductsContainer>
                <ProductsList>

                </ProductsList>
                <DataPurchases>
                    <h1>Total: R$ 999,00 </h1>
                    <ButtonComfirm>Confirmar Pedido</ButtonComfirm>
                </DataPurchases>
            </ProductsContainer>
        </Main>
    )
}

const Main = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    
`

const ProductsContainer = styled.div`
    width: 400px;
    height: 500px;
    border:1px solid black;
    position: relative;
`
const ProductsList = styled.div`
`
const DataPurchases = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
bottom: 5px;

`
const ButtonComfirm = styled.button`
width: 200px;
height: 30px;
margin-top: 10px;
`