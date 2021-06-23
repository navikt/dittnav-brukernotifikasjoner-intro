import styled from "styled-components";
import React from "react";

const Style = styled.div`
    max-width: 800px;
    ${props => props.maxWidth && `max-width: ${props.maxWidth}`}
    ${props => props.left && 'text-align: left;'}
`;

const Ingress = ({left, children, maxWidth = "800px"}) => (
  <Style left={left} maxWidth={maxWidth}>
    {children}
  </Style>
);

export default Ingress;
