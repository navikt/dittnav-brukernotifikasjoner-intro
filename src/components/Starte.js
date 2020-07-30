import React from 'react';
import {Normaltekst, Undertittel} from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";
import styled from "styled-components";
import Lenke from "nav-frontend-lenker";

const Ingress = styled.div`
    max-width: 800px;
    text-align: left;
`;

const Liste = styled.ul`
   list-style-type: none;
   padding-left: 0;
`;

const Starte = () => {
  return (
    <Layout>
      <Innhold>
        <Undertittel>
          Hvordan komme i gang?
        </Undertittel>
        <br/>
        <Ingress>
          <Liste>
            <li>
              <Normaltekst>
                <b>På slack: </b>#brukernotifikasjoner
              </Normaltekst>
            </li>
            <li>
              <Normaltekst>
                <b>Få tilgang: </b>
                <Lenke href="https://github.com/navikt/brukernotifikasjon-topic-iac">https://github.com/navikt/brukernotifikasjon-topic-iac</Lenke>
              </Normaltekst>
            </li>
            <li>
              <dl>
                <Normaltekst>
                  <dt>
                    <b>Skjema:</b>
                  </dt>
                  <dd>
                    - Genererte typer: <Lenke href="https://search.maven.org/search/?q=a:brukernotifikasjon-schemas">https://search.maven.org/search/?q=a:brukernotifikasjon-schemas</Lenke>
                  </dd>
                  <dd>
                    - Definisjon: <Lenke href="https://github.com/navikt/brukernotifikasjon-schemas">https://github.com/navikt/brukernotifikasjon-schemas</Lenke>
                  </dd>
                </Normaltekst>
              </dl>
            </li>
            <li>
              <Normaltekst>
                <b>Grafana-board: </b>
                <Lenke href="https://grafana.adeo.no/d/6ore-PuZz/dittnav-kafka?orgId=1&refresh=1m">https://grafana.adeo.no/d/6ore-PuZz/dittnav-kafka?orgId=1&refresh=1m</Lenke>
              </Normaltekst>
            </li>
            <li>
              <Normaltekst>
                <b>DittNAV for lokal kjøring: </b>
                <Lenke href="https://github.com/navikt/dittnav-docker-compose">https://github.com/navikt/dittnav-docker-compose</Lenke>
              </Normaltekst>
            </li>
            <li>
              <dl>
                <Normaltekst>
                  <dt>
                    <b>Teste dette lokalt<br/>Eksempelkode: </b>
                  </dt>
                  <dd>
                    - Java: <Lenke href="https://github.com/navikt/brukernotifikasjoner-demo-producer">https://search.maven.org/search/?q=a:brukernotifikasjon-schemas</Lenke>
                  </dd>
                  <dd>
                    - Kotlin: <Lenke href="https://github.com/navikt/dittnav-event-test-producer">https://github.com/navikt/dittnav-event-test-producer</Lenke>
                  </dd>
                </Normaltekst>
              </dl>
            </li>
          </Liste>
        </Ingress>
      </Innhold>
    </Layout>
  )
};

export default Starte;
