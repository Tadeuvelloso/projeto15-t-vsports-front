import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { CustomerContext } from "../contexts/customer"
import ProductContainer from "./components/ProductContainer"
export default function HomePage() {
    const { myCartArray, token } = useContext(CustomerContext)
    
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        const URL = "https://tvs-api.onrender.com/products";

        const promisse = axios.get(URL);

        promisse.then((res) => {
            setProducts(res.data);
            console.log(res.data);
        })
        promisse.catch((err) => {
            console.log(err.response.message);
        })

    },[])

    function addToCart(e) {

        e.preventDefault()

        navigate("/cart")
    }
    if (products) {
        return (
            <>
                <MainContent>

                    {products.map((array, index) => {
                        return (
                            <>
                                <ProductContainer key={index} _id={array._id} brand={array.brand} image={array.image} productName={array.productName} price={array.price} description={array.description} category={array.category} country={array.country} />
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
    
}

const MainContent = styled.main`
    width: 100%;
    height: 60%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    overflow: auto;
    margin-bottom: 100px;
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

