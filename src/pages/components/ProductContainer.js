import { useContext } from "react"
import styled from "styled-components"
import { CustomerContext } from "../../contexts/customer"
export default function ProductContainer(props) {
    const { token, setName } = useContext(CustomerContext)
    const { productName, price, description, category, country } = props

    function addToCart() {
        


    }


    return (
        <OuterProductContainer>
            <ImageContainer></ImageContainer>
            <DescriptionContainer>
                <OuterSizeContainer>
                    <h1>Tamanho:</h1>
                    <InnerSizeContainer>
                        <Size>GG</Size>
                        <Size>G</Size>
                        <Size>M</Size>
                        <Size>P</Size>
                    </InnerSizeContainer>
                </OuterSizeContainer>
                <SecondaryDescription>
                    <h1>{productName}</h1>
                    <PriceTag>
                        <h1>{Number(price).toFixed(2)} R$</h1>
                    </PriceTag>
                </SecondaryDescription>
                <DescriptionText>{description}</DescriptionText>
                <ToCartButton onClick={addToCart}>Add to my Cart</ToCartButton>
            </DescriptionContainer>
        </OuterProductContainer>
    )
}

const DescriptionContainer = styled.div`
    position: relative;
    border: 1px solid black;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
`
const DescriptionText = styled.div`
    font-size: 15px;
    color: gray;
    text-align: justify;
    padding: 5px;

`
const ImageContainer = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 50%;
    border-radius: 20px ;
`
const InnerSizeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 180px;
`
const OuterSizeContainer = styled.div`
    height: 40px;
    border: 1px solid black;
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;

    h1 {
        font-size: 20px;
        font-weight: bold;
        margin-right: 10px;
    }
`
const OuterProductContainer = styled.div`
    box-sizing: border-box;
    border: 1px solid black;
    width: 300px;
    height: 400px;
    margin-right: 10px;
    margin-left: 10px;
`
const PriceTag = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    border: 1px solid black;
    h1 {
        font-size: 20px;
        font-weight: bold;

    }  
`
const SecondaryDescription = styled.div`
    display: flex;
    border: 1px solid black;
    height: 40px;
    flex-direction: row;
    align-items: center;
    padding-right: 5px;
    justify-content: space-between;
    padding-left: 5px;
    
    h1 {
        font-size: 20px;
        font-weight: bold;
    }
`
const Size = styled.div`
    font-size: 20px;
    width: 35px;
    height: 35px;
    border-radius: 18px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ToCartButton = styled.button`
    position: absolute;
    display: flex;
    border: 1px solid black;
    width: 80px;
    height: 40px;
    border-radius: 5px;
    background-color: #FFFFFF;
    align-self: center;
    align-items: center;
    bottom: 5px;
`


