import { googleLogout } from "@react-oauth/google";

const clientId = "707587160486-j7adbuqsr1ostdquto9rhdk783o42jq0.apps.googleusercontent.com";

function Logout() {

const onSuccess = () => {
    console.log('Log out successful')
}
    return ( 
        <div id="signOutButton">
            <GoogleLogout 
                clientId={clientId}
                buttonText={'Logout'}
                onLogoutSuccess={onSuccess}
            />
        </div>
     );
}

export default Logout;