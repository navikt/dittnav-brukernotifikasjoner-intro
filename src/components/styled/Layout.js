import React from 'react';
import styled from "styled-components";


export const FlatLayout = styled.div`
  background-color: #E9E7E7;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Style = styled.div`
    background-color: ${props => props.backgroundColor};
    position: relative;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Layout = ({ backgroundColor, children }) => (
    <Style backgroundColor={backgroundColor}>
        {children}
    </Style>
);

export default Layout;
