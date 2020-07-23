import React from 'react';
import {Normaltekst, Sidetittel} from "nav-frontend-typografi";

const Funksjonalitet = () => {
    return (
        <div className="innhold">
            <Sidetittel>
                Sånn funker det:
            </Sidetittel>
            <br/>
            <Normaltekst>
                Oppgaver...
            </Normaltekst>
            <Normaltekst>
                Beskjeder...
            </Normaltekst>
            <Normaltekst>
                Statusoppdateringer...
            </Normaltekst>
        </div>
    )
};

export default Funksjonalitet;
