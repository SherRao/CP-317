import React from "react";
import Styled from "styled-components";
import default_profile from "../assets/default_profile.jpg";

import { SectionButton } from "@atoms";
import { Firebase } from "@functions";
import { useRef, useState } from "react";
import { LoginPopUp } from "@molecules";

const Container = Styled.div`
    width: 100%;
    height: 100%;
    padding: 1em;

    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: left;
    transition: all 0.25s ease;

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

const TitleDiv = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const StyledImg = Styled.img`
    max-width: 100%; 
    height: 13em;
    border-radius: 100%;
    padding: 0.2em;
    margin-left: 0.8em;  
`;

const StyledText = Styled.p`
    font-family: ${props => props.theme.fonts.title};
    margin: 0;
    color: ${props => props.theme.colors.black};
    font-weight: bold;
`;

const StyledTitle = Styled(StyledText)`
    font-size: ${props => props.theme.fontSizes.extraLarge};
    margin: 0em 0em 0em 1em;  
`;

const StyledSubTitle = Styled(StyledText)`
    font-size: ${props => props.theme.fontSizes.largeLarge};
    margin: 0.5em 0em 0em 0.2em; 
`;

const StyledSectionTitle = Styled(StyledText)`
    font-size: ${props => props.theme.fontSizes.large};
    margin: 0.5em 0em 0.5em 0.2em;
`;

const SectionDiv = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`;

const SettingsDiv = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`;



function SettingsPage() {
    const fileInputRef = useRef();
    const [profilePicture, setProfilePicture] = React.useState(null);
    const [userName, setUserName] = React.useState(null);
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(async () => {
        if(!userName)
            setUserName(await Firebase.getUsername());

        if(!profilePicture)
            setProfilePicture(await Firebase.getProfilePicture());

    }, []);

    const fileChangedHandler = (event) => {
        const file = event.target.files[0];
        if (file){
            Firebase.updateProfilePicture(file);
            console.log(file);
            window.location.href = "/settings";

        }
    }
    
    const togglePopup = () => {
        //setIsOpen(!isOpen);
        !isOpen;
        console.log(isOpen);
    }

    return (
        <Container>
            <TitleDiv>
                <StyledImg src={profilePicture} alt="Default Profile image" />
                <StyledTitle>{userName}</StyledTitle>
            </TitleDiv>
            
            <SettingsDiv>
                <StyledSubTitle>Settings</StyledSubTitle>

                <SectionDiv>
                    <StyledSectionTitle>Account SettingsDiv</StyledSectionTitle>
                    <SectionButton text="Upload Profile Picture" type="text" onClick={()=>fileInputRef.current.click()}/>
                    <input type="file" id="fileButton" ref={fileInputRef} onChange={fileChangedHandler} hidden/>
                    <SectionButton text="Change Password" type="text" onClick={Firebase.changePass}/>
                    <SectionButton text="Delete Account" type="text" onClick={() => setIsOpen(!isOpen)}/>
                    
                    <SectionButton text="Logout" type="text" onClick={Firebase.logout}/>
                </SectionDiv>

                <SectionDiv>
                    <StyledSectionTitle>Display Settings</StyledSectionTitle>
                    <SectionButton text="Light Mode" type="text" onClick={notImplemented}/>
                    <SectionButton text="Dark Mode" type="text" onClick={notImplemented}/>
                </SectionDiv>

                <SectionDiv>
                    <StyledSectionTitle>Language Settings</StyledSectionTitle>
                    <SectionButton text="English" type="text" onClick={notImplemented}/>
                    <SectionButton text="French" type="text" onClick={notImplemented}/>
                </SectionDiv>
                
            </SettingsDiv>
            {isOpen ?  <LoginPopUp isOpen={isOpen}/> : null}
        </Container>
    );
}

function notImplemented() {
    alert("This feature has not been implemented yet!");
}

export default SettingsPage;