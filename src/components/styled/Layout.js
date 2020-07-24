import React from 'react';
import styled from "styled-components";


export const FlatLayout = styled.div`
  background-color: #E9E7E7;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Style = styled.div`
    background-color: ${props => props.light ? '#E9E7E7' : '#C6C2BF'};
    position: relative;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Layout = ({ light, children }) => (
    <Style light={light}>
        {children}
    </Style>
);

export default Layout;
