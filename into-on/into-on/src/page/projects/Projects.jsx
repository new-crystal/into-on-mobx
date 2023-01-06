import styled from "styled-components"
import ProjectBox from "./components/ProjectBox"

const Projects = () => {
    return (
    <Container>
        <ul>
            <li>ALL</li>
            <li>SPACE</li>
            <li>GRAPHIC</li>
            <li>PLANNING</li>
            <li>BOOTHTAINER</li>
            <li>WEBINAR</li>
            <li>OTHERS</li>
        </ul>
        <BoxContainer>
            <ProjectBox url = {""}/>
        </BoxContainer>
    </Container>
    )
}

const Container = styled.div`
    background-color: rgba(255,255,255,0);
    background-position: center center;
    background-repeat: no-repeat;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    margin-top: 7%;
    font-size: 18px;

    ul{
        display: flex;
        flex-direction: row;
        overflow: hidden;
        list-style: none;
        margin-bottom: 55px;
        padding: 0;
        line-height: 34px;
        text-align: center;
        font-weight: 400;
        letter-spacing: 0px;
        font-style: normal;
    }

    li {
        margin: 15px;
        list-style: none;
        color:#666
    }
`

const BoxContainer = styled.div`
    display: flex;
`
export default Projects