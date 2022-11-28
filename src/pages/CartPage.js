import axios from "axios"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { CustomerContext } from "../contexts/customer"
import GlobalHeader from "./components/GlobalHeader"
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


    /* useEffect(() => {

        if (token) {
            axios.get(`http://localhost:5000/myCart`, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })
                .then((resp) => {
                    setArrayToCheckout(resp.data)
                })
                .catch((resp) => {
                    console.log(resp.response)
                })
        }
    }, []) */

    if (myCartArray.length !== 0) {
        return (
            <>
                <GlobalHeader></GlobalHeader>
                <MainContent>

                    {myCartArray.map((array, index) => {
                        return (
                            <>
                                <ProductContainer key={index} _id={array._id} brand={array.brand} productName={array.productName} price={array.price} description={array.description} category={array.category} country={array.country} />
                            </>
                        )
                    })
                    }

                </MainContent>
                <FooterContainer>
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
                <GlobalHeader></GlobalHeader>
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
    border: 2px solid black;
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
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const GoTocheckoutButton = styled.button`
    display: flex;
    border: 1px solid black;
    width: 100px;
    height: 60px;
    border-radius: 5px;
    background-color: #FFFFFF;
    align-self: center;
    align-items: center;
    bottom: 5px;
`

