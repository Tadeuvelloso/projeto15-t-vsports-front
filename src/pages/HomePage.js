import { useContext } from "react"
import styled from "styled-components"
import { CustomerContext } from "../contexts/customer"
import GlobalHeader from "./components/GlobalHeader"
import ProductContainer from "./components/ProductContainer"

export default function HomePage() {
    const arrayToTest = [
        {
            productName: "t-shirt",
            description: "great t-shirt",
            brand: "nike",
            category: "G",
            price: 30.00,
            country: "Brasil"
        },
        {
            productName: "t-shirt2",
            description: "not great t-shirt",
            brand: "par",
            category: "M",
            price: 20.00,
            country: "EUA"
        },
        {
            productName: "t-shirt3",
            description: " bad t-shirt",
            brand: "puma",
            category: "P",
            price: 10.00,
            country: "França"
        }
    ]


    return (
        <>
            <GlobalHeader></GlobalHeader>
            <MainContent>

                {arrayToTest.map((array, index) => {
                    return (
                        <>
                            <ProductContainer key={index} productName = {array.productName} price = {array.price} description={array.description} category = {array.category} country = {array.country} />
                        </>
                    )
                })
                
                }

                
            </MainContent>
            <FooterContainer></FooterContainer>
        </>
    )
}

const FooterContainer = styled.footer`
    width: 100%;
    height: 80px;
    border: 2px solid black;
`
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




