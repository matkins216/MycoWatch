import { GoogleLogin } from "@react-oauth/google";

const clientId =
  "707587160486-j7adbuqsr1ostdquto9rhdk783o42jq0.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log('Login Success! Current User: ', res.profileObj);
    }
    const onFailure = (res) => {
      console.log("Login Failed! Res: ", res);
    };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
