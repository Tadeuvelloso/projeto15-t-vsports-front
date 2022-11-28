import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function FooterComponent() {
    const navigate = useNavigate()

    return (
        <FooterContainer>
            <GoToCartButton onClick={() => navigate("/cart")}> conclude and proceed to my cart</GoToCartButton>
            <GoTocheckoutButton onClick={() => navigate("/checkout")}> conclude and proceed to my cart</GoTocheckoutButton>
        </FooterContainer>
    )
}

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

