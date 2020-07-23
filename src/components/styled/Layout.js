import React from 'react';
import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.backgroundColor};
    position: relative;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    `;

const Layout = ({backgroundColor, children}) => (
    <Style backgroundColor={backgroundColor}>
        {children}
    </Style>
);

export default Layout;
