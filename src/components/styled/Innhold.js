import styled from "styled-components";
import React from "react";

const Style = styled.div`
    margin-top: 8rem;
    margin-bottom: 8rem;
    margin-left: ${props => props.flat ? '0rem' : '8rem'};
    margin-right: ${props => props.flat ? '0rem' : '8rem'};
`;

const Innhold = ({ flat, children }) => (
    <Style flat={flat}>
        {children}
    </Style>
);

export default Innhold;
