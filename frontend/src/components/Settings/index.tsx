import styled from "styled-components";

const Settings = () => {
  return (
    <Wrapper>
      <HeadingText>Settings</HeadingText>
    </Wrapper>
  );
};

export default Settings;

const Wrapper = styled.div`
  margin: 40px;
  padding: 24px;
  background-color: #ffffff;
  width: 100%;
  border-radius: 16px;
  overflow: auto;
`;

const HeadingText = styled.div`
  font-size: 28px;
  border-bottom: 1px solid #e3e8e5;
  padding-bottom: 16px;
`;
