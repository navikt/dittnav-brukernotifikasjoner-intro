import React from 'react';
import { Systemtittel } from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";

const Oversikt = () => {
    return (
        <Layout backgroundColor="#C6C2BF">
            <Innhold>
                <Systemtittel>
                    Brukernotifikasjoner og statusopdateringer:<br />
                    Oppgaver, beskjeder og status i søknad/sak til brukerne gjennom Ditt Nav
                </Systemtittel>
                <br/>
                <img src="" alt=""/>
            </Innhold>
        </Layout>
    )
};

export default Oversikt;
