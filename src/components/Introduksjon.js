import React from 'react';
import styled from "styled-components";
import { Normaltekst, Sidetittel } from "nav-frontend-typografi";

const Wrapper = styled.div`
  background-color: #C6C2BF;
  position: relative;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Innhold = styled.div`
  margin: 8rem;
`;

const Ingress = styled.div`
    max-width: 800px;
`;

const Introduksjon = () => {
    return (
        <Wrapper>
            <Innhold>
                <Sidetittel>
                    Ditt NAV: <br/>Helhet i innloggede tjenester på nav.no
                </Sidetittel>
                <br/>
                <Ingress>
                    <Normaltekst>
                        "Ditt NAV skal binde sammen alle de gode tjenestene som andre team lager for brukerne våre.
                        Brukerne har ikke noe forhold til hvordan NAV er organisert eller hvordan tjenestene er inndelt
                        - de vil bare ha hjelp og støtte i sin unike situasjon. På Ditt NAV skal brukerne få et
                        overblikk over sitt forhold til NAV, og bli trygge på at NAV kan hjelpe dem videre i livet."
                    </Normaltekst>
                    <Normaltekst>
                        <i>- Team Personbruker</i>
                    </Normaltekst>
                </Ingress>
            </Innhold>
        </Wrapper>
    )
};

export default Introduksjon;
