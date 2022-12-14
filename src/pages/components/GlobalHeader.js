import axios from "axios"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logoImage from "../../assets/Logo.png"
import { CustomerContext } from "../../contexts/customer"

export default function GlobalHeader() {
    let { token, name, setToken, setName, setMyCartArray, setArrayToCheckout } = useContext(CustomerContext)
    const navigate = useNavigate()

    async function logOut(id) {

        const confirmTologOut = window.confirm(`Confirm to logout ${name}`)
        const config = {
            headers: {
                "authorization": `Bearer ${token}`
            }
        }
        if (confirmTologOut) {
            await axios.delete(`https://tvs-api.onrender.com/myCart/${token}`, config)
                .then((resp) => {
                    console.log(resp)
                    setToken("")
                    setName("")
                    setMyCartArray([])
                    setArrayToCheckout([])
                    navigate("/")
                }).catch((resp) => {
                    console.log(resp.response)
                })

        }
    }


    if (token.length === 0) {
        return (
            <GlobalContainerHeader>
                <img src={logoImage} alt="logo" />
                <NavContainer>
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link to="/cart">
                        <p>myCart</p>
                    </Link>
                    <Link to="/checkout">
                        <p>CheckOut</p>
                    </Link>
                </NavContainer>
                <LoginContainer>
                    <Link to="/signin">
                        <p>Login</p>
                    </Link>
                </LoginContainer>
            </GlobalContainerHeader>
        )
    }
    else {
        return (
            <>
                <GlobalContainerHeader>
                    <img src={logoImage} alt="logo" />
                    <NavContainer>
                        <Link to="/">
                            <p>Home</p>
                        </Link>
                        <Link to="/cart">
                            <p>myCart</p>
                        </Link>
                        <Link to="/checkout">
                            <p>CheckOut</p>
                        </Link>
                    </NavContainer>
                    <LoginContainer>
                        <p onClick={logOut}>LogOut</p>
                    </LoginContainer>
                </GlobalContainerHeader>
            </>
        )
    }

}

const GlobalContainerHeader = styled.header`
    box-sizing: border-box;
    border: 4px solid #eee393;
    height: 80px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
 
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Rubik Distressed', cursive;
    img{
        width: 80px;
        height: 100%;
    }
    p {
        font-size: 20px;
        font-weight:500;
    }
`

const NavContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    a{
        text-decoration: none;
        cursor: pointer;
        color:#ccb404;
        :hover{
            color: #968402;
        }
    }
`
const LoginContainer = styled.div`
align-items: center;
border-radius: 25px;
border: 1px solid #ccb404;
display: flex;
height: 50px;
justify-content: center;
width: 100px;
background-color: #eee393;
color:#ccb404;
    a{
        text-decoration: none;
        cursor: pointer;
        color:#ccb404;
        }
    :hover{
        background-color: #968402;
    }
`