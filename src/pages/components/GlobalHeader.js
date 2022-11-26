import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logoImage from "../../assets/Logo.png"
import { CustomerContext } from "../../contexts/customer"

export default function GlobalHeader() {
    let { token, name, setToken, setName } = useContext(CustomerContext)
    const navigate = useNavigate()
    function logOut() {
        const confirmTologOut = window.confirm(`Confirm to logout ${name}`)

        if (confirmTologOut) {
            console.log(confirmTologOut)
            setToken(false)
            setName("")
            navigate("/")
        }
    }


    if (!token) {
        return (
            <>
                <GlobalContainerHeader>
                    <img src={logoImage} alt="logo" />
                    <NavContainer>
                        <Link to="/">
                            <p>Home</p>
                        </Link>
                        <p>myCart</p>
                        <p>CheckOut</p>
                    </NavContainer>
                    <LoginContainer>
                        <Link to="/signin">
                            <p>Login</p>
                        </Link>
                    </LoginContainer>
                </GlobalContainerHeader>
            </>
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
                        <p>myCart</p>
                        <p>CheckOut</p>
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
    border: 2px solid black;
    height: 80px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    

    display: flex;
    align-items: center;
    justify-content: space-between;


    img{
        width: 80px;
        height: 80px;
    }

    p {
        font-size: 20px;
        font-weight:500;
    }
`

const NavContainer = styled.div`
    border: 1px solid black;
    width: 250px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const LoginContainer = styled.div`
align-items: center;
border-radius: 25px;
border: 1px solid black;
display: flex;
height: 50px;
justify-content: center;
width: 100px;
`