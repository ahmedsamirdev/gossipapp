import Head from "next/head";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp</title>
      </Head>
      <Container>
        <Sidebar />
        <RightContainer>
          <Hidden only={["lg", "md", "sm", "xl"]}>
            <IconButton>
              <ArrowBack />
            </IconButton>
          </Hidden>

          <Contain>
            <img
              src="./welcome.png"
              width={300}
              style={{
                marginTop: 150,
                marginBottom: 15,
              }}
            />
            <Title>Keep connected with your friends</Title>
            <Details>
              WhatsApp clone connects with your friends. Just add your friend's
              Gmail and chat.
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

const ArrowBack = styled(ArrowBackIcon)`
  margin: 10px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
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
  width: 400px;
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
