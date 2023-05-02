//External imports
import { useEffect, useRef } from 'react'
import { useGoogleOneTapLogin } from '@react-oauth/google';
import React from 'react';




const LoginPage = () => {

    return (

        useGoogleOneTapLogin({
            onSuccess: credentialResponse => {
                console.log(credentialResponse);
            },
            onError: () => {
                console.log('Login Failed');
            },
        })
        
    )
}

export default LoginPage;