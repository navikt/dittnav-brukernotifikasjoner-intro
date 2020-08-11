import styled from "styled-components";
import React from "react";

const Style = styled.div`
    max-width: 800px;
    ${props => props.left && 'text-align: left;'}
`;

const Ingress = ({left, children}) => (
  <Style left={left}>
    {children}
  </Style>
);

export default Ingress;
