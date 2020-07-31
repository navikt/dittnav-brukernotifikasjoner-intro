import React from 'react';
import styled from "styled-components";
import {Systemtittel} from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";
import diagram from "../assets/Diagram.png"
import Ingress from "./styled/Ingress";

const Diagram = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-top: 2rem;
`;

const Teknisk = () => {
  return (
    <Layout light>
      <Innhold>
        <Systemtittel>
          Teknisk dokumentasjon
        </Systemtittel>
        <br/>
        <Ingress>
          <Diagram src={diagram} alt="Diagram av løsningen"/>
        </Ingress>
      </Innhold>
    </Layout>
  )
};

export default Teknisk;
