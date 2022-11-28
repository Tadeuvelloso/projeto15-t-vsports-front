import axios from "axios";
import styled from "styled-components";
import { CustomerContext } from "../contexts/customer";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckOut (){
    const { arrayToCheckout, token, setArrayToCheckout, setMyCartArray } = useContext(CustomerContext);
    const navigate = useNavigate();
    const [total, setTotal] = useState(0)
    const [pagamento, setPagamento] = useState("")

    function buyComfirm (e){
        e.preventDefault();

        const URL = `https://tvs-api.onrender.com/myCart`

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            } 
        }

        const body = {arrayToCheckout, payment: pagamento}

        const promisse = axios.post(URL, body, config)
        
        promisse.then(() => {
            console.log("compra realizada com sucesso!");
            console.log(body);
            setArrayToCheckout([]);
            setMyCartArray([]);
            navigate("/");
            return
        }).catch((err) => {
            console.log(err);
            return
        })

        
    }

    useEffect(() => {
        let soma = 0;
        if(arrayToCheckout.length >= 0){
            arrayToCheckout.forEach((t) => {
                soma += Number(t.price)
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
                    <h1>Total: R$ {Number(total).toFixed(2)} </h1>
                    <div>
                        <Credito pagamento={pagamento} onClick={() => setPagamento("Crédito")}>Crédito</Credito>
                        <Debito pagamento={pagamento} onClick={() => setPagamento("Débito")}>Débito</Debito>
                        <Dinheiro pagamento={pagamento} onClick={() => setPagamento("Dinheiro")}>Dinheiro</Dinheiro>
                    </div>
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
    border: 4px solid #eee393;
    position: relative;
    border-radius: 15px;
    margin-top: 10px;
`
const ProductsList = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box;
padding: 10px;
overflow-y: scroll;
div{
    margin: 10px auto;
    font-size: 15px;
}
`
const DataPurchases = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 5px;
    div{
        margin-top: 10px;
        display: flex;
    }
`
const ButtonComfirm = styled.button`
    width: 200px;
    height: 30px;
    margin-top: 10px;
    background-color: #eee393;
    border-radius: 10px;
`
const Credito = styled.div`
width: 80px;
height: 40px;
border-radius: 5px;
cursor: pointer;
border: 1px solid ${props => props.pagamento === "Crédito" ? "black" : "white"};
justify-content: center;
align-items: center;
background-color: #eee393;
`
const Debito = styled.div`
width: 80px;
height: 40px;
border-radius: 5px;
cursor: pointer;
border: 1px solid ${props => props.pagamento === "Débito" ? "black" : "white"};
justify-content: center;
align-items: center;
margin-left: 5px;
margin-right: 5px;
background-color: #eee393;
`
const Dinheiro = styled.div`
width: 80px;
height: 40px;
border-radius: 5px;
cursor: pointer;
border: 1px solid ${props => props.pagamento === "Dinheiro" ? "black" : "white"};
justify-content: center;
align-items: center;
background-color: #eee393;
`


