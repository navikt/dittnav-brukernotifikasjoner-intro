import React from 'react';
import { Normaltekst, Sidetittel } from "nav-frontend-typografi";

const Oversikt = () => {
    return (
        <div className="">
            <div className="innhold">
                <Sidetittel>
                    Brukernotifikasjoner og statusopdateringer:<br />
                    Oppgaver, beskjeder og status i søknad/sak til brukerne gjennom Ditt Nav
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
