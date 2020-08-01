import React from 'react';
import {Systemtittel} from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";
import dittnav from "../assets/Dittnav.png";
import styled from "styled-components";

const Dittnav = styled.img`
  width: 65%;
  height: auto;
  margin-top: 2rem;
  @media (max-width: 1024px) {
    width: 600px;
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 375px) {
    width: 300px;
  }
`;

const Oversikt = () => {
  return (
    <Layout>
      <Innhold trimBottom>
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
