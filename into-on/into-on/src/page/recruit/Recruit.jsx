import RecruitPeopleText from "./components/RecruitPeopleText";
import styled from "styled-components";
import RecruitPeople from "./components/RecruitPeople";

const Recruit = () => {
  return (
    <Container>
      <RecruitPeopleText />
      <RecruitPeople />
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  zoom: 1;
  background-color: rgba(255, 255, 255, 0);
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 0px;
  padding-right: 30px;
  padding-bottom: 0px;
  padding-left: 30px;
  margin-top: 60px;
`;

export default Recruit;
