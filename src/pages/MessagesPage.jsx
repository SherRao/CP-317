import React from "react";
import Styled from "styled-components";

const PageContainer = Styled.div`
    padding: 0;

    background-color: ${props => props.theme.colors.white};

    transition: all 0.25s ease;
`;

function MessagesPage() {
    return (
        <PageContainer>

        </PageContainer>
    );
}

export default MessagesPage;