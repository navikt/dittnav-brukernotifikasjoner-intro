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
              <b>Beskjeder...</b> <br/>
              Dette er en typisk informasjonsmelding til sluttbrukeren. Denne krever ikke nødvendigvis noe mer handling fra brukeren. For eksempel, «Du sendte en søknad om <...>». <br/>
              Kafka: brukernotifikasjon:beskjed <br/><br/>
              Status: Klar til bruk i produksjon. Ekstern varsling (e-post/sms) under utvikling.
            </Normaltekst>
          </div>
          <div>
            <Oppgave/>
            <Normaltekst>
                 <b>Oppgaver...</b> <br/>
              Oppgave brukes når du trenger at bruker skal gjøre en konkret handling. For eksempel «Vi mangler et vedlegg. Send inn her <...>.» 
            Brukeren kan ikke selv klikke bort et oppgave-event. Så her må du som produsent holde styr på når oppgaven er fullført. Les mer om oppgave <br/>
              Kafka: brukernotifikasjon:oppgave + done <br/><br/>
              Status: Klar til bruk i produksjon. Ekstern varsling (e-post/sms) under utvikling.
            </Normaltekst>
          </div>
          <div>
            <Statusoppdatering/>
            <Normaltekst>
              <b>Statusoppdateringer...</b> <br/>
              Hvis en sak eller søknad i et fagsystem har endret status kan produsenten sende et Statusoppdatering-event. Dette er en enkel tekstlig beskrivelse som for eksempel "Mottatt". Statusoppdateringen kan brukes videre blant annet i en saksprosess-side <br/>
              Kafka: brukernotifikasjon:Statusoppdatering <br/><br/>
              Status: under utvikling, tilgjengelig for test
            </Normaltekst>
          </div>
        </Box>
      </Innhold>
    </FlatLayout>
  )
};

export default Funksjonalitet;
