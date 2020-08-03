import React from 'react';
import {Normaltekst, Sidetittel} from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";
import Ingress from "./styled/Ingress";

const Introduksjon = () => {
  return (
    <Layout>
      <Innhold>
        <Sidetittel>
          Ditt NAV: <br/>Helhet i innloggede tjenester på nav.no
        </Sidetittel>
        <br/>
        <Ingress>
          <Normaltekst>
            «Ditt NAV skal binde sammen alle de gode tjenestene som andre team lager for brukerne våre.
            Brukerne har ikke noe forhold til hvordan NAV er organisert eller hvordan tjenestene er inndelt
            - de vil bare ha hjelp og støtte i sin unike situasjon. På Ditt NAV skal brukerne få et
            overblikk over sitt forhold til NAV, og bli trygge på at NAV kan hjelpe dem videre i livet».
          </Normaltekst>
          <Normaltekst style={{textAlign: 'right', paddingRight: '80px'}}>
            <i>- Team Personbruker</i>
          </Normaltekst>
        </Ingress>
      </Innhold>
    </Layout>
  )
};

export default Introduksjon;
