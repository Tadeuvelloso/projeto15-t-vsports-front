import axios from "axios"
import { useContext, useEffect } from "react"
import styled from "styled-components"
import { CustomerContext } from "../contexts/customer"
import GlobalHeader from "./components/GlobalHeader"
import ProductContainer from "./components/ProductContainer"

export default function HomePage() {
    const { token, arrayToCheckout, setArrayToCheckout } = useContext(CustomerContext)
    const config = {
        headers: {
            "authorization": `Bearer ${token}`
        }
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/myCart`, config)
            .then((resp) => {
                setArrayToCheckout(resp.data)
                console.log("sucesso")
            })
            .catch((resp) => {
                console.log("deu ruim")
                console.log(resp.response)
            })
    }, [])

    console.log(arrayToCheckout)
    if (arrayToCheckout.length !== 0) {
        return (
            <>
                <GlobalHeader></GlobalHeader>
                <MainContent>

                    {arrayToCheckout[0].products.map((array, index) => {
                        return (
                            <>
                                <ProductContainer key={index} id={array.id} brand={array.brand} productName={array.productName} price={array.price} description={array.description} category={array.category} country={array.country} />
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
        return (
            <>
                <p>loading...</p>
            </>)
    }

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

