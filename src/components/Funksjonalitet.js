import React from 'react';
import {Innholdstittel, Normaltekst, Systemtittel } from "nav-frontend-typografi";
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

const BrukernotifikasjonBox = styled.div`
  max-width: 600px;
  padding-bottom: 2.25rem;
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
          <BrukernotifikasjonBox>
            <Beskjed/>
              <Systemtittel>Beskjeder</Systemtittel> <br/>
              <Normaltekst>
                Dette er en typisk informasjonsmelding til sluttbrukeren. Denne krever ikke nødvendigvis noe mer handling fra brukeren. For eksempel, «Du sendte en søknad om ...». Brukeren kan varsles om beskjeden på SMS og e-post.
                <br/><br/>
                <b>Status:</b> Klar til bruk i produksjon.
            </Normaltekst>
          </BrukernotifikasjonBox>
          <BrukernotifikasjonBox>
            <Oppgave/>
              <Systemtittel>Oppgaver</Systemtittel> <br/>
              <Normaltekst>
                Oppgave brukes når du trenger at bruker skal gjøre en konkret handling. For eksempel «Vi mangler et vedlegg. Send inn her ...»
                Brukeren kan ikke selv klikke bort et oppgave-event. Så her må du som produsent holde styr på når oppgaven er fullført. Brukeren kan varsles om oppgaven på SMS og e-post.
                <br/><br/>
                <b>Status:</b> Klar til bruk i produksjon.
              </Normaltekst>
          </BrukernotifikasjonBox>
          <BrukernotifikasjonBox>
            <Statusoppdatering/>
              <Systemtittel>Statusoppdateringer</Systemtittel> <br/>
              <Normaltekst>
                Hvis en sak eller søknad i et fagsystem har endret status kan produsenten sende et Statusoppdatering-event. Dette er en enkel tekstlig beskrivelse som for eksempel «Mottatt». Statusoppdateringen kan brukes videre blant annet i en saksprosess-side.
                <br/><br/>
                <b>Status:</b> under utvikling, tilgjengelig for test
            </Normaltekst>
          </BrukernotifikasjonBox>
        </Box>
      </Innhold>
    </FlatLayout>
  )
};

export default Funksjonalitet;
