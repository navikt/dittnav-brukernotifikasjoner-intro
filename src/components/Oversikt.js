import React from 'react';
import {Systemtittel} from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";
import dittnav from "../assets/Dittnav.png";
import styled from "styled-components";

const Dittnav = styled.img`
  width: 60%;
  height: auto;
  margin-top: 2rem;
  @media (max-width: 1024px) {
   width: 100%;
  }
`;

const Oversikt = () => {
  return (
    <Layout>
      <Innhold>
        <Systemtittel>
          Brukernotifikasjoner og statusopdateringer:<br/>
          Oppgaver, beskjeder og status i søknad/sak til brukerne gjennom Ditt Nav
        </Systemtittel>
        <br/>
        <Dittnav src={dittnav} alt="Skjermbilde av dittnav"/>
      </Innhold>
    </Layout>
  )
};

export default Oversikt;
