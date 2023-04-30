//External imports
import { useEffect, useRef } from 'react'
import { GoogleLogin } from '@react-oauth/google';

const loadScript = (src) =>
    new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve()
        const script = document.createElement('script')
        script.src = src
        script.onload = () => resolve()
        script.onerror = (err) => reject(err)
        document.body.appendChild(script)
    })

const LoginPage = () => {

    const googleButton = useRef(null);

    useEffect(() => {
        const src = 'https://accounts.google.com/gsi/client'
        const id = "707587160486-j7adbuqsr1ostdquto9rhdk783o42jq0.apps.googleusercontent.com"

        loadScript(src)
            .then(() => {
                /*global google*/
                console.log(google)
                google.accounts.id.initialize({
                    client_id: id,
                    callback: handleCredentialResponse,
                })
                google.accounts.id.renderButton(
                    googleButton.current,
                    { theme: 'outline', size: 'large' }
                )
            })
            .catch(console.error)

        return () => {
            const scriptTag = document.querySelector(`script[src="${src}"]`)
            if (scriptTag) document.body.removeChild(scriptTag)
        }
    }, [])

    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
    }

    return (

    <GoogleLogin
        onSuccess={credentialResponse => {
            console.log(credentialResponse);
        }}
        onError={() => {
            console.log('Login Failed');
        }}
    />
    )
}

export default LoginPage