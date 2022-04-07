import { Box, Container, Flex } from "@chakra-ui/layout";
import "./App.css";
import Main from "./components/main/main";
import SidBar from "./components/sidBar/SidBar";
import SideProfile from "./components/sideProfile/sideProfile";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loader from './svg/Loader'

const App = () => {

const logoutBtnStyle = {
    backgroundColor: "#546e7a",
    margin: "1.6em 0 0 0",
    padding: "0.5em 0",
    width: "13rem",
    border: "none",
    color: "white",
    borderRadius: "2em",
    display: "inline",
};
  const { logout } = useAuth0();

  return (
    <Container bg="#f8fafd" maxW="Container.3xl" height="100vh" p="0">
      <Flex height="full">
        <Box
          height="full"
          flex={{
            base: 0.5,
            sm: 0.5,
            md: 0.5,
            lg: 0.5,
            xl: 1,
          }}
          display={["none","block","block","block","block"]}
          mr={["30px", "20px", "30px", "60px", "50px"]}
        >
          <SidBar />
        </Box>
        <Box height="full" flex={5} w={[ "20%", "30%", "20%", "50%", "60%" ]}>
          <button
            style={logoutBtnStyle}
            onClick={() => logout( {
            returnTo: window.location.origin,
            } )
            }
            >
          <strong>Logout</strong>
          </button>
          <Main />
        </Box>
        <Box
          bg="white"
          height="full"
          flex={2}
          display={["none", "none", "block", "block", "block"]}
        >
          <SideProfile />
        </Box>
      </Flex>
    </Container>
  );
};



export default withAuthenticationRequired(App, {
  onRedirecting: () => <Loader/>,
});
