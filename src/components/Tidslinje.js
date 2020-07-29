import React from 'react';
import {Normaltekst, Systemtittel} from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";
import Ingress from "./styled/Ingress";

const Tidslinje = () => {
  return (
    <Layout>
      <Innhold>
        <Systemtittel>
          Tidslinje: <br/>
          Komponent for å vise tidligere og kommende hendelser i en sak
        </Systemtittel>
        <br/>
        <Ingress>
          <Normaltekst>
            Vi lager en react-komponent som basert på hendelsene (oppgaver, beskjeder og statusoppdateringer)
            viser bruker hva som har skjedd i saken og hva som er neste steg. Stegene vil være generiske,
            men tidslinjen kan tilpasses av hvert team som lager innsyn i sak for tjenestene våre.
          </Normaltekst>
          <img src="" alt=""/>
        </Ingress>
      </Innhold>
    </Layout>
  )
};

export default Tidslinje;
