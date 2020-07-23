import React from 'react';
import { Normaltekst, Sidetittel } from "nav-frontend-typografi";

const Tidslinje = () => {
    return (
        <div className="header section">
            <div className="innhold">
                <Sidetittel>
                    Tidslinje: <br />
                    Komponent for å vise tidligere og kommende hendelser i en sak
                </Sidetittel>
                <br/>
                <Normaltekst>
                    Vi lager en react-komponent som basert på hendelsene (oppgaver, beskjeder og statusoppdateringer)
                    viser bruker hva som har skjedd i saken og hva som er neste steg. Stegene vil være generiske, men
                    tidslinjen kan tilpasses av hvert team som lager innsyn i sak for tjenestene våre.
                </Normaltekst>
            </div>
        </div>
    )
};

export default Tidslinje;
