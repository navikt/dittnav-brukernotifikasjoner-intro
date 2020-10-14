import React from 'react';
import {Systemtittel} from "nav-frontend-typografi";
import Hjelpetekst from 'nav-frontend-hjelpetekst';
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";
import dittnav from "../assets/Dittnav.png";
import innsyn from "../assets/Innsyn.png";

import styled from "styled-components";

const Bilde = styled.img`
  margin-top: 2rem;
  width: 100%;
`;

const BildeContainer = styled.div`
  position: relative;
`;

const Forklaring = styled(Hjelpetekst)`  
  position: absolute;
  ${props => props.top && `top: ${props.top};`}
  ${props => props.left && `left: ${props.left};`}
  
  @media (max-width: 525px) {
    display: none;
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
        <BildeContainer>
          <Bilde src={dittnav} alt="Skjermbilde av dittnav"/>
          <Forklaring top="35%" left="94%" type="over-hoyre">
            Beskjeder til brukerne som betrygger dem om at NAV er på saken.
          </Forklaring>
          <Forklaring top="45%" left="3%" type="over-venstre">
            Oppgaver som brukerne må gjøre for at NAV kan hjelpe dem videre.
          </Forklaring>
          <Forklaring top="82.5%" left="3%" type="over-venstre">
            Oversikt over søknader og saker, med siste statusoppdatering synlig.
          </Forklaring>
          <Forklaring top="62.5%" left="65%">
            Alt samlet i en historikkvisning så brukerne enkelt kan finne tilbake - uavhengig av hvilken sak det gjaldt.
          </Forklaring>
        </BildeContainer>
        <BildeContainer>
          <Bilde src={innsyn} alt="Skjermbilde av en side til innsyn i sak"/>
          <Forklaring top="15%" left="74%">
            Tenkt eksempel på en generisk innsyn i sak-side, med saksspesifikke oppgaver/beskjeder og en tidslinjekomponent som viser hva som har skjedd og hva som skal skje i saken.
          </Forklaring>
          <Forklaring top="75%" left="93%" type="over-hoyre">
            Tidslinjekomponenten viser hva som har skjedd og hva som skal skje i saken, basert på statusoppdateringer og brukernotifikasjoner. Innholdet i komponenten vil være generisk (basert på globale statuser) og tilpasses av teamene slik at den for eksempel også viser lokale statuser og bedre tilpasset tekstlig informasjon.
          </Forklaring>
        </BildeContainer>
      </Innhold>
    </Layout>
  )
};

export default Oversikt;
