import React from 'react';
import { Normaltekst, Systemtittel } from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";

const Tidslinje = () => {
    return (
        <Layout backgroundColor="#C6C2BF">
            <Innhold>
                <Systemtittel>
                    Tidslinje: <br />
                    Komponent for å vise tidligere og kommende hendelser i en sak
                </Systemtittel>
                <br/>
                <Normaltekst>
                    Vi lager en react-komponent som basert på hendelsene (oppgaver, beskjeder og statusoppdateringer)
                    viser bruker hva som har skjedd i saken og hva som er neste steg. Stegene vil være generiske, men
                    tidslinjen kan tilpasses av hvert team som lager innsyn i sak for tjenestene våre.
                </Normaltekst>
                <img src="" alt=""/>
            </Innhold>
        </Layout>
    )
};

export default Tidslinje;
