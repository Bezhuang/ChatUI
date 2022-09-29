import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
    width: ${({ width }) => width || "80px"};
    background-color: ${({ theme }) => theme.primaryColor};
`;

function Button({ width, onClick, label, children }) {
    return (
        <StyledButton width={width} onClick={onClick}>
            <button>{label}</button>
            {children}
        </StyledButton>
    )
}

export default Button;