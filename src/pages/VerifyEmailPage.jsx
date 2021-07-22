import React from "react";
import Styled from "styled-components";
import { Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { MuspaceLogo } from "@atoms";
import { GoogleSigninButton } from "@atoms";
import { LoginForm } from "@molecules"; 

import { Firebase } from "@functions";

const Container = Styled.div`
    width: 100vw;
    height: 100vh;
    padding: 5em;

    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;
    background-color: ${props => props.theme.colors.black};

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

function VerifyEmailPage() {
    return (
        <Container>
        </Container>
    );
}

export default VerifyEmailPage;