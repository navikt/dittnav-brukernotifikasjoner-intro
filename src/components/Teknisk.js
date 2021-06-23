import React from 'react';
import styled from "styled-components";
import {Normaltekst, Systemtittel} from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";
import diagram from "../assets/Diagram.png"
import prosess from "../assets/Prosess.png"
import Ingress from "./styled/Ingress";
import Lenke from "nav-frontend-lenker";

const Diagram = styled.img`
  max-width: 800px;
  height: auto;
  border-radius: 3px;
  margin-top: 2rem;
`;

const Prosess = styled.img`
  width: 35%;
  height: auto;
  border-radius: 3px;
  margin-top: 2rem;
  
  @media (max-width: 475px) {
    display: none;
  }
`;

const Box = styled.div`
  display: flex;
  max-width: 800px;
  ${props => props.column && 'flex-direction: column'};
`;

const CenteredTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  text-align: left;
  
  @media (max-width: 475px) {
    padding-left: 0;
    padding-bottom: 1.75rem;
  }
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
          <Box column>
            <Box>
              <Prosess src={prosess} alt=""/>
              <CenteredTextBox>
                <Normaltekst>
                  <b>Oppgaver</b><br/>
                  Oppgave er mer detaljert beskrevet <Lenke href="https://navikt.github.io/brukernotifikasjon-docs/eventtyper/oppgave/beskrivelse/"> her</Lenke><br/>
                  Kafka: brukernotifikasjon + done
                </Normaltekst>
              </CenteredTextBox>
            </Box>
            <Box>
              <Prosess src={prosess} alt=""/>
              <CenteredTextBox>
                <Normaltekst>
                  <b>Beskjeder</b><br/>
                  Beskjed er mer detaljert beskrevet <Lenke href="https://navikt.github.io/brukernotifikasjon-docs/eventtyper/beskjed/beskrivelse/"> her</Lenke><br/>
                  Kafka: brukernotifikasjon (og Done fra frontend hvis bruker krysser den bort)
                </Normaltekst>
              </CenteredTextBox>
            </Box>
            <Box>
              <Prosess src={prosess} alt=""/>
              <CenteredTextBox>
                <Normaltekst>
                  <b>Statusoppdateringer</b><br/>
                  Statusoppdatering er mer detaljert beskrevet <Lenke href="https://navikt.github.io/brukernotifikasjon-docs/eventtyper/statusoppdatering/beskrivelse/"> her</Lenke><br/>
                  Kafka: brukernotifikasjon
                </Normaltekst>
              </CenteredTextBox>
            </Box>
          </Box>
        </Ingress>
      </Innhold>
    </Layout>
  )
};

export default Teknisk;
