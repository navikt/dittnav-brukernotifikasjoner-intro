import React from 'react';
import { Normaltekst, Sidetittel } from "nav-frontend-typografi";

const Oversikt = () => {
    return (
        <div className="header section">
            <div className="innhold">
                <Sidetittel>
                    Tittel
                </Sidetittel>
                <br/>
                <Normaltekst>
                    Tekst
                </Normaltekst>
            </div>
        </div>
    )
};

export default Oversikt;
