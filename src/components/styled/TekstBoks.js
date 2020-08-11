import styled from "styled-components";
import React from "react";

const Style = styled.div`
  display: flex;
  ${props => props.bottom && 'padding-bottom: 2.5em'};
`;

const TekstBox = ({bottom, children}) => (
  <Style bottom={bottom}>
    {children}
  </Style>
);

export default TekstBox;
