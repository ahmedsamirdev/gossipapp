import Head from "next/head";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp</title>
      </Head>
      <Container>
        <Sidebar />
        <RightContainer>
          <Contain>
            <img
              src="./welcome.png"
              width={300}
              style={{
                marginTop: 150,
                marginBottom: 15,
              }}
            />
            <Title>Keep your phone connected</Title>
            <Details>
              WhatsApp connects to your phone to sync messages. To reduce data
              usage, connect your phone to Wi-Fi.
            </Details>
          </Contain>
        </RightContainer>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Title = styled.h1`
  margin-top: auto;
  font-size: 32px;
  font-weight: 300;
  color: #525252;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 0 auto;
  }
`;
const RightContainer = styled.div`
  background-color: #f8f9fa;
  width: 100%;
  height: 100vh;
`;

const Details = styled.h1`
  margin-top: 18px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  text-align: center;
  color: #00000073;
`;

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Items = styled.div`
  background-image: url("/welcome.png");
  background-position: center;
  background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
`;
