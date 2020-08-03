import React from 'react';
import {Normaltekst, Systemtittel} from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Ingress from "./styled/Ingress";
import Innhold from "./styled/Innhold";

const Problemer = () => {
  return (
    <Layout light>
      <Innhold>
        <Systemtittel>
          Hvilke problemer skal vi løse?
        </Systemtittel>
        <br/>
        <Ingress>
          <Normaltekst>
            Brukerne sliter med å finne frem i de innloggede løsningene på nav.no. Informasjonen er
            spredt og brukerne leter etter alt på alle steder. De føler utrygghet - «det sorte hullet»
            blir brukt som betegnelse på opplevelsen brukerne har av å sende inn en søknad. Har Nav
            mottat søknaden min? Har jeg gjort alt riktig? Mangler det noe? Når skal nav begynne å se
            på saken min? Hvor lenge skal den være "under behandling" og hva er det neste som skal skje?
            <b><i> Kommer alt til å ordne seg?</i></b>
          </Normaltekst> <br/>
          <Normaltekst>
            Dittnav blir en flaskehals slik det har vært satt opp, med ekstremt mange koblinger og
            avhengigheter ut til andre systemer og løsninger. Hver gang noe nytt skal «kobles på» Ditt
            NAV kreves det utvikling fra Team Personbruker, og det kan ta tid før verdifull informasjon
            til brukerne som blir generert av andre team når frem til Ditt NAV.
          </Normaltekst>
        </Ingress>
      </Innhold>
    </Layout>
  )
};

export default Problemer;
