import styled from "styled-components";
import React from "react";

const margin = (flat) => flat ? '0rem' : '8rem';
const mobileMargin = (flat) => flat ? '0rem' : '4rem';

const Style = styled.div`
    margin-top: ${margin()};
    margin-bottom: ${margin()};
    margin-left: ${props => margin(props.flat)};
    margin-right: ${props => margin(props.flat)};
    @media (max-width: 768px) {
      margin-top: ${mobileMargin()};
      margin-bottom: ${mobileMargin()};
      margin-left: ${props => mobileMargin(props.flat)};
      margin-right: ${props => mobileMargin(props.flat)};
   }
`;

const Innhold = ({flat, children}) => (
  <Style flat={flat}>
    {children}
  </Style>
);

export default Innhold;
