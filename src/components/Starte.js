import React from 'react';
import {Normaltekst, Systemtittel} from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";
import styled from "styled-components";
import Lenke from "nav-frontend-lenker";
import Utgang from "../assets/Utgang";
import {useMediaQuery} from "react-responsive/src";

const Ingress = styled.div`
    width: 800px;
    text-align: left;
    @media (max-width: 1024px) {
      width: 600px;
    }
    @media (max-width: 768px) {
      width: 400px;
    }
    @media (max-width: 375px) {
      width: 300px;
    }
`;

const Liste = styled.ul`
   list-style-type: none;
   padding-left: 0;
`;

const ListItem = styled.li`
   padding-bottom: 16px;
`;


const Starte = () => {
  const isMobile = useMediaQuery({query: '(max-width: 768px)'});

  return (
    <Layout>
      <Innhold>
        <Systemtittel>
          Hvordan komme i gang?
        </Systemtittel>
        <br/>
        <Ingress>
          <Liste>
            <ListItem>
              <Normaltekst>
                <b>På slack: #</b>brukernotifikasjoner
              </Normaltekst>
            </ListItem>
            <ListItem>
              <Normaltekst>
                <b>Ansvar: </b>
                <Lenke href="https://github.com/navikt/brukernotifikasjon-topic-iac#ansvar">
                  <span>Dette må man gå igjennom før man får tilgang</span><Utgang skjul={isMobile}/>
                </Lenke>
              </Normaltekst>
            </ListItem>
            <ListItem>
              <Normaltekst>
                <b>FAQ: </b>
                <Lenke href="https://navikt.github.io/brukernotifikasjon-docs/faq/">
                  <span>navikt/brukernotifikasjon-docs</span><Utgang skjul={isMobile}/>
                </Lenke>
              </Normaltekst>
            </ListItem>
            <ListItem>
              <Normaltekst>
                <b>Få tilgang: </b>
                <Lenke href="https://github.com/navikt/brukernotifikasjon-topic-iac">
                  <span>navikt/brukernotifikasjon-topic-iac</span><Utgang skjul={isMobile}/>
                </Lenke>
              </Normaltekst>
            </ListItem>
            <ListItem>
              <Normaltekst>
                <b>Skjema:</b><br/>
                - Genererte typer: {''}
                <Lenke href="https://search.maven.org/search/?q=a:brukernotifikasjon-schemas">
                  <span>maven/brukernotifikasjon-schemas</span><Utgang skjul={isMobile}/>
                </Lenke><br/>
                - Definisjon: {''}
                <Lenke href="https://github.com/navikt/brukernotifikasjon-schemas">
                  <span>navikt/brukernotifikasjon-schemas</span><Utgang skjul={isMobile}/>
                </Lenke>
              </Normaltekst>
            </ListItem>
            <ListItem>
              <Normaltekst>
                <b>Grafana-board: </b>
                <Lenke href="https://grafana.adeo.no/d/6ore-PuZz/dittnav-kafka?orgId=1&refresh=1m">
                  <span>grafana/dittnav-kafka</span><Utgang skjul={isMobile}/>
                </Lenke>
              </Normaltekst>
            </ListItem>
            <ListItem>
              <Normaltekst>
                <b>DittNAV for lokal kjøring: </b>
                <Lenke href="https://github.com/navikt/dittnav-docker-compose">
                  <span>navikt/dittnav-docker-compose</span><Utgang skjul={isMobile}/>
                </Lenke>
              </Normaltekst>
            </ListItem>
            <li>
              <Normaltekst>
                <b>Teste dette lokalt</b>
              </Normaltekst>
            </li>
            <ListItem>
              <Normaltekst>
                <b>Eksempelkode: </b><br/>
                - Java: {''}
                <Lenke href="https://github.com/navikt/brukernotifikasjoner-demo-producer">
                  <span>navikt/brukernotifikasjoner-demo-producer</span><Utgang skjul={isMobile}/>
                </Lenke><br/>
                - Kotlin: {''}
                <Lenke href="https://github.com/navikt/dittnav-event-test-producer">
                  <span>navikt/dittnav-event-test-producer</span><Utgang skjul={isMobile}/>
                </Lenke>
              </Normaltekst>
            </ListItem>
          </Liste>
        </Ingress>
      </Innhold>
    </Layout>
  )
};

export default Starte;
