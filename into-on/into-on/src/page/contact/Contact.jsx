import MapBox from "./components/MapBox"
import Location from "./components/Location"
import styled from "styled-components"

const Contact = () => {
    return(
        <>
        <MapBox/>
        <TextContainer>
            <Location/>
        </TextContainer>
        </>
    )
}

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`
export default Contact