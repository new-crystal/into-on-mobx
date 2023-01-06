import styled from "styled-components"

const SubmitForm = () => {

    return(
        <Container>
            <SubmitText>
            Looking for a business partner?
            <br></br>
            Please fill the blanks below
            </SubmitText>
            <form>
                
            </form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    flex-direction: column;
`
const SubmitText = styled.p`
        margin-top: 0;
    margin-bottom: 20px;
    font-size: 30px;
    color: #e71e38;
    font-style: italic;
    font-weight: 700;
`
export default SubmitForm