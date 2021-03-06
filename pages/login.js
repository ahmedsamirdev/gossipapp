import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import LockIcon from "@material-ui/icons/Lock";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="/logo.png" />
        <Button  onClick={signIn} variant="outlined" >
          Sign in with google
        </Button>
        <Encrypt>
          <Lock />
          <p>End-to-End encrypted</p>
        </Encrypt>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Lock = styled(LockIcon)`
  color: #a1a1a1;
  transform: scale(0.7);
`;
const Encrypt = styled.div`
  display: flex;
  flex: row;
  align-items: center;
  > p {
    color: #a1a1a1;
    font-size: 14px;
  }
`;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 50px 100px;
  border-radius: 20px;
  box-shadow: 6px 6px 13px -3px #e6e6e682;
`;

const Logo = styled.img`
  width: 200px;
  margin-bottom: 30px;
`;
