import axios from "axios"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { CustomerContext } from "../contexts/customer"
import ProductContainer from "./components/ProductContainer"

export default function CartPage() {
    const { token, arrayToCheckout, setArrayToCheckout, myCartArray, setMyCartArray } = useContext(CustomerContext)
    console.log(myCartArray)
    const navigate = useNavigate()


    function GoTocheckout() {
        setArrayToCheckout(myCartArray)

        if (myCartArray.length === 0) {
            alert ("Please add a product to your cart before proceeding to checkout")
            return
        }

        navigate("/checkout")
    }


    
    if (myCartArray.length !== 0) {
        return (
            <>
                <MainContent>

                    {myCartArray.map((array, index) => {
                        return (
                            <>
                                <ProductContainer key={index} _id={array._id} brand={array.brand} productName={array.productName} price={array.price} description={array.description} category={array.category} country={array.country} image={array.image}/>
                            </>
                        )
                    })
                    }

                </MainContent>
                <FooterContainer>
                    <GoTocheckoutButton onClick={GoTocheckout}> conclude and proceed to my checkout</GoTocheckoutButton>
                </FooterContainer>
            </>
        )
    }

    else {
        if (!token) {
            setTimeout(() => navigate("/signIn"), 5000);
            return (
                <>
                    <p>Please log In to access your cart</p>
                </>
            )
        }
        return (
           
            <>
                <MainContent>

                   <NoProductMessage><p>There is no product in your cart</p></NoProductMessage>

                </MainContent>
                <FooterContainer>
                    <GoTocheckoutButton onClick={GoTocheckout}> conclude and proceed to my cart</GoTocheckoutButton>
                </FooterContainer>
            </>
        )
    }
}

const NoProductMessage = styled.div`
    display: flex;
    align-self: center;
    width: 700px;
    height: 500px;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    border-radius: 180px;
    p{
        text-align: center;
        font-size: 40px;
    }
`

const MainContent = styled.main`
    width: 100%;
    height: 620px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: auto;
`

const FooterContainer = styled.footer`
    width: 100%;
    height: 80px;
    border: 4px solid #ccb404;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0px;
    background-color: white;
    z-index: 1;
`

const GoTocheckoutButton = styled.button`
    display: flex;
    border: 1px solid black;
    width: 100px;
    height: 60px;
    border-radius: 5px;
    background-color: #eee393;
    align-self: center;
    align-items: center;
    bottom: 5px;
    :hover{
        cursor: pointer;
        color: #847614;
    }
`

