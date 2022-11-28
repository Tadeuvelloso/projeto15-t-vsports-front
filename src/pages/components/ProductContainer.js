import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import { CustomerContext } from "../../contexts/customer"
export default function ProductContainer(props) {
    const { setMyCartArray, myCartArray, token, setArrayToCheckout } = useContext(CustomerContext)
    const {_id, productName, price, description, category, country, brand, image } = props
    console.log(myCartArray)
    function addToCart() {
        if (!token) {
            alert("Por favor entre na sua conta para realizar suas compras")
            return
        }

        const productToAdd = {
            _id,
            productName,
            description,
            brand,
            category,
            price,
            country,
            image
        }

        const findProduct = myCartArray.find((obj)=> obj.id === productToAdd.id)
        
        if (!findProduct) {
            setMyCartArray([...myCartArray, productToAdd])
            console.log("added product")
        }


    }

    async function deleteProductFromCart(product_id) {
        console.log(product_id)
        const confirmToDelete = window.confirm(`Confirm to delete`)

        if (confirmToDelete) {

            const newArray = myCartArray.filter((array) => array._id !== product_id)
            
            setArrayToCheckout(newArray)
            setMyCartArray(newArray)

            /* const config = {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            }
            await axios.patch(`http://localhost:5000/myCart/delete/${product_id}`,{}, config)
                .then((resp) => {
                    
                }).catch((resp) => {
                    console.log(resp.response)
                }) */
        } 
    }

    return (
        <OuterProductContainer>
            <ImageContainer>
                <img src={image} alt="product_image"/>
            </ImageContainer>
            <DescriptionContainer>
                <OuterSizeContainer>
                    <h1>{productName}</h1>
                </OuterSizeContainer>
                <SecondaryDescription>
                    <PriceTag>
                        <h1>R$: {Number(price).toFixed(2)} </h1>
                    </PriceTag>
                </SecondaryDescription>
                <DescriptionText>{description}</DescriptionText>
                <ButtonContainer>
                    <ToCartButton onClick={addToCart}>Add to my Cart</ToCartButton>
                    <DeleteButton onClick={() => deleteProductFromCart(_id)}>remove from my Cart</DeleteButton>
                </ButtonContainer>
            </DescriptionContainer>
        </OuterProductContainer>
    )
}

const DescriptionContainer = styled.div`
    position: relative;
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
    width: 100%;
    height: 50%;
    border-radius: 20px;
    img{
        height: 100%;
        width: 100%;
        border-radius: 20px;
    }
`
const OuterSizeContainer = styled.div`
    height: 40px;
  
    width: 100%;
    display: flex;
    margin-top: 10px;
    margin-bottom: 5px;
    flex-direction: row;
    align-items: center;

    h1 {
        font-size: 18px;
        font-weight: bold;
        margin-right: 10px;
    }
`
const OuterProductContainer = styled.div`
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 17px;
    width: 300px;
    height: 400px;
    margin:7px;
    box-sizing: border-box;
    padding: 5px;
    text-align: center;
`
const PriceTag = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    
    h1 {
        font-size: 20px;
        font-weight: bold;
    }  
`
const SecondaryDescription = styled.div`
    display: flex;
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
const ToCartButton = styled.button`
    position: absolute;
    display: flex;
    border: 1px solid black;
    width: 90px;
    height: 40px;
    border-radius: 5px;
    background-color: #FFFFFF;
    align-self: center;
    align-items: center;
    margin-right: 5px;
    bottom: 5px;
`


const DeleteButton = styled.button`
    position: absolute;
    display: flex;
    border: 1px solid black;
    width: 90px;
    height: 40px;
    border-radius: 5px;
    background-color: #FFFFFF;
    align-self: center;
    align-items: center;
    right: 10px;
    bottom: 5px;
`

const ButtonContainer = styled.button`
    margin-top: 5px;
    position: relative;
    display: flex;
    flex-direction: row;
    width:280px;
    height: 70px;
    border: none;
    background-color: #FFFFFF;
    align-self: center;
`
