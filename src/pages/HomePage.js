import styled from "styled-components"
import GlobalHeader from "./components/GlobalHeader"


export default function HomePage() {
    return(
        <>
          <GlobalHeader></GlobalHeader>  
            <MainContent></MainContent>
            <FooterContainer></FooterContainer>
        </>
    )
}


const MainContent = styled.main` 
    width: 100%;
    height: 620px;
    border: 2px solid black;
`


const FooterContainer = styled.footer`
    width: 100%;
    height: 80px;
    border: 2px solid black;
`


