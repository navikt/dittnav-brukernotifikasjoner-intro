import React from 'react';
import {Normaltekst, Systemtittel} from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Ingress from "./styled/Ingress";
import Innhold from "./styled/Innhold";
import styled from "styled-components";
import brukeropplevelse from "../assets/Brukeropplevelse.png";
import avhengigheter from "../assets/Avhengigheter.png";
import TekstBox from "./styled/TekstBoks";

const Ikon = styled.img`
  height: 120px;
  padding-right: 1.5em;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Tekst = styled(Normaltekst)`
  margin: auto;
`;

const Problemer = () => {
  return (
    <Layout light>
      <Innhold>
        <Systemtittel>
          Hvilke problemer skal vi løse?
        </Systemtittel>
        <br/>
        <Ingress left>
          <TekstBox bottom>
            <Ikon src={brukeropplevelse} alt=""/>
            <Tekst>
              Brukerne sliter med å finne frem i de innloggede løsningene på nav.no. Informasjonen er
              spredt og brukerne leter etter alt på alle steder. De føler utrygghet - «det sorte hullet»
              blir brukt som betegnelse på opplevelsen brukerne har av å sende inn en søknad. Har Nav
              mottat søknaden min? Har jeg gjort alt riktig? Mangler det noe? Når skal nav begynne å se
              på saken min? Hvor lenge skal den være "under behandling" og hva er det neste som skal skje?
              <b><i> Kommer alt til å ordne seg?</i></b>
            </Tekst>
          </TekstBox>
          <TekstBox>
            <Ikon src={avhengigheter} alt=""/>
            <Tekst>
              Dittnav blir en flaskehals slik det har vært satt opp, med ekstremt mange koblinger og
              avhengigheter ut til andre systemer og løsninger. Hver gang noe nytt skal «kobles på» Ditt
              NAV kreves det utvikling fra Team Personbruker, og det kan ta tid før verdifull informasjon
              til brukerne som blir generert av andre team når frem til Ditt NAV.
            </Tekst>
          </TekstBox>
        </Ingress>
      </Innhold>
    </Layout>
  )
};

export default Problemer;
