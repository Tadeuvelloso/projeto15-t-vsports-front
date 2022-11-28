import axios from "axios";
import styled from "styled-components";
import { CustomerContext } from "../contexts/customer";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckOut (){
    const { arrayToCheckout } = useContext(CustomerContext);
    const navigate = useNavigate();
    const [total, setTotal] = useState(0)
    let soma = 0;

    function buyComfirm (e){
        e.preventDefault();

        // Função que excui a array do usuario

        navigate("/");
    }

    useEffect(() => {
        if(arrayToCheckout.length >= 0){
            arrayToCheckout.forEach((t) => {
                soma += t.price
            })
            return setTotal(soma) 
        }
    },[arrayToCheckout])

    

    return(
        <Main>
            <ProductsContainer>
                <ProductsList>
                    {arrayToCheckout.map((i) => <div><p>{i.productName} - R$ {i.price}</p></div>)}
                </ProductsList>
                <DataPurchases>
                    <h1>Total: R$ {total.toFixed(2)} </h1>
                    <ButtonComfirm onClick={buyComfirm}>Confirmar Pedido</ButtonComfirm>
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