import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { CustomerContext } from "../contexts/customer"
import GlobalHeader from "./components/GlobalHeader"
import ProductContainer from "./components/ProductContainer"

export default function HomePage() {
    const {myCartArray, token } = useContext(CustomerContext)
    
    const navigate = useNavigate()
    
    const arrayToTest = [
        {
            id: 1234,
            productName: "t-shirt",
            description: "great t-shirt",
            brand: "nike",
            category: "G",
            price: 30.00,
            country: "Brasil"
        },
        {
            id: 12353,
            productName: "t-shirt2",
            description: "not great t-shirt",
            brand: "par",
            category: "M",
            price: 20.00,
            country: "EUA"
        },
        {
            id: 234234,
            productName: "t-shirt3",
            description: " bad t-shirt",
            brand: "puma",
            category: "P",
            price: 10.00,
            country: "França"
        }
    ]

    function addToCart(e) {
   
        e.preventDefault()
       
        axios.post(`http://localhost:5000/myCart`, myCartArray, {
            headers: {
                "authorization": `Bearer ${token}`
            }
        })
            .then((resp) => {
                console.log(resp.data)
                navigate("/cart")
            })
            .catch((resp) => {
                console.log(resp.response)
            })

    }

    return (
        <>
            <GlobalHeader></GlobalHeader>
            <MainContent>

                {arrayToTest.map((array, index) => {
                    return (
                        <>
                            <ProductContainer key={index} id={array.id} brand={array.brand} productName={array.productName} price={array.price} description={array.description} category={array.category} country={array.country} />
                        </>
                    )
                })

                }

            </MainContent>
            <FooterContainer>
                <GoToCartButton onClick={addToCart}> conclude and proceed to my cart</GoToCartButton>
            </FooterContainer>
        </>
    )
}

const MainContent = styled.main`
    width: 100%;
    height: 620px;
    border: 2px solid black;
    padding: 10px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
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
const GoToCartButton = styled.button`
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

