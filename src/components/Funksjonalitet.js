import React from 'react';
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";
import Innhold from "./styled/Innhold";
import {FlatLayout} from "./styled/Layout";
import styled from "styled-components";
import Beskjed from "../assets/Beskjed";
import Oppgave from "../assets/Oppgave";
import Statusoppdatering from "../assets/Statusoppdatering";

const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 1024px;
  @media (max-width: 1024px) {
    width 800px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 400px;
  }
  @media (max-width: 375px) {
    width: 300px;
  }
`;

const Funksjonalitet = () => {
  return (
    <FlatLayout>
      <Innhold flat>
        <Innholdstittel>
          Sånn funker det:
        </Innholdstittel>
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
            <Statusoppdatering/>
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
