import React from 'react';
import styled from "styled-components";
import {Normaltekst, Systemtittel} from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";
import diagram from "../assets/Diagram.png"
import prosess from "../assets/Prosess.png"
import Ingress from "./styled/Ingress";

const Diagram = styled.img`
  width: 100%;
  height: auto;
  border-radius: 3px;
  margin-top: 2rem;
`;

const Prosess = styled.img`
  width: 35%;
  height: auto;
  border-radius: 3px;
  margin-top: 2rem;
`;

const Box = styled.div`
  display: flex;
  ${props => props.column && 'flex-direction: column'};

`;

const CenteredTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  text-align: left;
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
                  Forklaring/hensikt ...<br/>
                  Kafka: brukernotifikasjon + done
                </Normaltekst>
              </CenteredTextBox>
            </Box>
            <Box>
              <Prosess src={prosess} alt=""/>
              <CenteredTextBox>
                <Normaltekst>
                  <b>Beskjeder</b><br/>
                  Forklaring/hensikt ...<br/>
                  Kafka: brukernotifikasjon + done
                </Normaltekst>
              </CenteredTextBox>
            </Box>
            <Box>
              <Prosess src={prosess} alt=""/>
              <CenteredTextBox>
                <Normaltekst>
                  <b>Statusoppdateringer</b><br/>
                  Forklaring/hensikt ...<br/>
                  Kafka: brukernotifikasjon + done
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
