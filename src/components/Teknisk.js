import React from 'react';
import styled from "styled-components";
import { Normaltekst, Systemtittel } from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";
import diagram from "../assets/Diagram.png"
import Ingress from "./styled/Ingress";

const Diagram = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 6rem;
`;

const Teknisk = () => {
    return (
        <Layout backgroundColor="#E9E7E7">
            <Innhold>
                <Systemtittel>
                    Teknisk dokumentasjon
                </Systemtittel>
                <br/>
                <Ingress>
                    <Normaltekst>
                        Vi lager en react-komponent som basert på hendelsene (oppgaver, beskjeder og
                        statusoppdateringer) viser bruker hva som har skjedd i saken og hva som er neste steg.
                        Stegene vil være generiske, men tidslinjen kan tilpasses av hvert team som lager innsyn i sak
                        for tjenestene våre.
                    </Normaltekst>
                    <Diagram src={diagram} alt="Diagram av løsningen"/>
                </Ingress>
            </Innhold>
        </Layout>
    )
};

export default Teknisk;
