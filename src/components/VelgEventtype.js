import React from 'react';
import {Normaltekst, Systemtittel} from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";
import Ingress from "./styled/Ingress";
import eventtyper from '../assets/VelgEventtype.png'
import styled from "styled-components";

const Bilde = styled.img`
  margin-top: 2rem;
  width: 100%;
`;

const VelgEventtype = () => {
    return (
        <Layout>
            <Innhold>
                <Systemtittel>
                    Hvilken eventtype skal vi bruke?
                </Systemtittel>
                <br/>
                <Ingress>
                    <Normaltekst>
                        Ved å gå gjennom spørsmålene i figuren blir det enklere å finne ut hvilken eventtype som passer best til deres behov.
                    </Normaltekst>
                    <Bilde src={eventtyper} alt="Guide for valg av eventtype"/>
                </Ingress>
            </Innhold>
        </Layout>
    )
};

export default VelgEventtype;
