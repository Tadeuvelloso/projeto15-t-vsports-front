import styled from "styled-components"
import GlobalHeader from "./components/GlobalHeader"
import {Link, useNavigate} from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import { CustomerContext } from "../contexts/customer"

export default function SignIn() {
        const navigate = useNavigate()
        const [form, setForm] = useState(
            {
                login: "",
                password: ""
            })
        let { setToken, setName } = useContext(CustomerContext)

        function handleForm(e) {
            setForm({
                ...form, [e.target.name]: e.target.value
            })
            console.log(form)
        }

        function postSignIn(e) {
            e.preventDefault();

            axios.post(`http://localhost:5000/sign-in`, form)
                .then((resp) => {
                    console.log(resp)
                    setToken(resp.data.token)
                    setName(resp.data.userName)
                    alert(`Login made with Success`)
                    navigate("/")
                })
                .catch((resp) => {
                    alert(resp.response.data)
                })

        }


    return (
        <>
            <GlobalHeader></GlobalHeader>
            <MainContent>
                <LeftColumn></LeftColumn>
                <RightColumn></RightColumn>
                <LogInContainer>
                    <SignInForm onSubmit={postSignIn}>
                        <input required type="text" name="login" placeholder="E-mail or username" onChange={handleForm} value={form.email}></input>
                        <input required type="password" name="password" placeholder="password" onChange={handleForm} value={form.password}></input>
                        <SignInButton type="submit" value="Access your account"></SignInButton>
                    </SignInForm>

                    <Link to="/SignUp">
                        <p>You don't have an account? Sign-up here!</p>
                    </Link>
                </LogInContainer>
            </MainContent>
            <FooterContainer></FooterContainer>
        </>
    )
}


const RightColumn = styled.div`
    width: 40%;
    height: 100%;
    border: 1px solid black;
    z-index: 0;
`
const LogInContainer = styled.div`
    width: 350px;
    height: 450px;
    border: 1px solid black;
    box-sizing: border-box;
    position: fixed;
    top: 15vh;
    left: 55vw;
    z-index: 1;
    text-align: center;
`
const LeftColumn = styled.div`
    width: 60%;
    height: 100%;
    border: 1px solid black;
    z-index: 0;
`


const MainContent = styled.main` 
    width: 100%;
    height: 620px;
    border: 2px solid black;
    box-sizing: border-box;

    display: flex;
    flex-direction:row;

`
const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    padding-top: 15px;
    text-align: center;

    input {
        border: 1px solid black;
        box-sizing: border-box;
        width: 300px;
        height: 60px;
        margin-bottom: 15px;
        border-radius: 5px;

        font-size: 20px;
        padding: 10px;


    }

`
const SignInButton = styled.input`
font-size: 20px;
font-weight: 700;
`

const FooterContainer = styled.footer`
    width: 100%;
    height: 80px;
    border: 2px solid black;
`