import React from "react";
import Styled from "styled-components";

import { FaBookmark } from "react-icons/fa";
import { AlbumCover, Card } from "@atoms";
import { SpaceFillerDiv } from "@misc";

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: column;
    width: min-content;
`;

const StyledIcon = Styled.div`
    color: ${props => props.theme.colors.pink }
`;

const StyledText = Styled.p`
    margin: 0.2em;  
    font-size: ${props => props.theme.fontSizes.medium}
`;

const StyledUsername = Styled.p`
    margin: 0;
    font-weight: bold;
`;

function ListeningActivityCard() {
    return (
        <Card style={{flexDirection: "row", padding: 0}} bgColor="grey">
            <StyledDiv>
                <AlbumCover width="6rem" />
            </StyledDiv>
            <StyledDiv style={{ width: "max-content", maxWidth: "100%", justifyContent: "center" }}>
                <StyledUsername>
                    <StyledText>Username</StyledText>
                </StyledUsername>
                <StyledText>Song Title - Artist Name</StyledText>
            </StyledDiv>
            <SpaceFillerDiv />
            <StyledDiv>
                <StyledIcon>
                    <FaBookmark size="1.6em" style={{ margin: "0.8em 0.6em 0 0" }}/>
                </StyledIcon>
            </StyledDiv>
        </Card>
    );
}

export default ListeningActivityCard;