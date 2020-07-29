import React from 'react';
import {Normaltekst, Sidetittel} from "nav-frontend-typografi";
import Innhold from "./styled/Innhold";
import {FlatLayout} from "./styled/Layout";
import styled from "styled-components";
import Beskjed from "../assets/Beskjed";
import Oppgave from "../assets/Oppgave";

const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Funksjonalitet = () => {
  return (
    <FlatLayout>
      <Innhold flat>
        <Sidetittel>
          Sånn funker det:
        </Sidetittel>
        <br/>
        <Box>
          <div>
            <Beskjed/>
            <Normaltekst>
              <b>Oppgaver...</b> <br/>
              Forklaring/hensikt <br/>
              Kafka: brukernotifikasjon + done <br/><br/>
              Status: klar til bruk
            </Normaltekst>
          </div>
          <div>
            <Oppgave/>
            <Normaltekst>
              <b>Beskjeder...</b> <br/>
              Forklaring/hensikt <br/>
              Kafka: brukernotifikasjon + done <br/><br/>
              Status: klar til bruk
            </Normaltekst>
          </div>
          <div>
            <Oppgave/>
            <Normaltekst>
              <b>Statusoppdateringer...</b> <br/>
              Forklaring/hensikt <br/>
              Kafka: brukernotifikasjon + done <br/><br/>
              Status: under utvikling
            </Normaltekst>
          </div>
        </Box>
      </Innhold>
    </FlatLayout>
  )
};

export default Funksjonalitet;
