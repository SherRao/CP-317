import React from "react";
import Styled from "styled-components";

import { LeaderBoardLabel, LeaderBoardStat } from "@atoms"; 
import { Firebase } from "@functions";

const StyledDiv = Styled.div`
    color:${props => props.theme.colors.black};
    width: 400px;
    height: auto;
    padding: 0.8em;
    align-self: right;
    display: flex;
    flex-direction: column;
    align-items: top;
    border-style: hidden; 
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledInnerDiv = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
`;

const StyledLink = Styled.a`
    border: none;
    padding: 0;
    size: 0;
    display: block;
    margin: 0 auto;
    text-decoration: none;
    margin-top: 5%;
`;

const StyledText = Styled.p`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.mediumLarge};
    color: ${props => props.theme.colors.black};
    flex: 1;
    margin: 0 auto;
    text-align: top;
    text-align: left;
    font-weight: bold;
`;

function LeaderBoard({ text }){
    const [profilePic, setProfilePic ] = React.useState(null);
    const user = Firebase.auth.currentUser;
    
    React.useEffect(() => {
        if(!profilePic)
            getProfilePic();

    }, []);

    async function getProfilePic() {
        const x = await Firebase.db.collection("users").doc(user.uid).get("profile_picture");
        setProfilePic(x);

    }

    return (
        <StyledDiv>
            <StyledText>Leaderboard</StyledText>
            <StyledInnerDiv>
                <LeaderBoardLabel text="Top Listening Hours:"/>
                <StyledInnerDiv>
                    <LeaderBoardStat number={1} username="username" hours={1337} href="/" src={profilePic}></LeaderBoardStat>
                    <LeaderBoardStat number={2} username="username" hours={420} href="/" src={profilePic}></LeaderBoardStat>
                    <LeaderBoardStat number={3} username="username" hours={69} href="/" src={profilePic}></LeaderBoardStat>
                </StyledInnerDiv>
                <LeaderBoardLabel text="Number of Unique Artists:"/>
                <StyledInnerDiv>
                    <LeaderBoardStat number={1} username="username" hours={96} href="/" src={profilePic}></LeaderBoardStat>
                    <LeaderBoardStat number={2} username="username" hours={69} href="/" src={profilePic}></LeaderBoardStat>
                    <LeaderBoardStat number={3} username="username" hours={69} href="/" src={profilePic}></LeaderBoardStat>
                </StyledInnerDiv>
            </StyledInnerDiv>
        </StyledDiv>
    );
}

export default LeaderBoard;