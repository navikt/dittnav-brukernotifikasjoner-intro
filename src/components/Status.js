import React from 'react';
import {Normaltekst, Systemtittel} from "nav-frontend-typografi";
import Layout from "./styled/Layout";
import Innhold from "./styled/Innhold";
import styled from "styled-components";

const Table = styled.table`
   border-spacing: 10px;
   width: 600px;
   @media (max-width: 768px) {
    width: 400px;
   }
`;

const TableRow = styled.tr`
   text-align: left;
`;

const TableHead = styled.th`
   padding: 8px 8px 8px;
   padding-left: 16px;
   color: #FFFFFF;
   background-color: #78706A;
`;

const TableData = styled.td`
   padding: 8px 8px 8px;
   padding-left: 16px;
   background-color: #FFFFFF;
`;

const Status = () => {
  return (
    <Layout light>
      <Innhold>
        <Systemtittel>
          Status for bruk av hendelser
        </Systemtittel>
        <Normaltekst>
          Første produsent i prod 1.april<br/>
          Gjennomsnittlig 20 000 eventer per dag
        </Normaltekst>
        <br/>
        <Table>
          <tbody>
          <TableRow>
            <TableHead>Team</TableHead>
            <TableHead>Hendelsetype</TableHead>
          </TableRow>
          <TableRow>
            <TableData>Sykemelding</TableData>
            <TableData>Oppgave</TableData>
          </TableRow>
          <TableRow>
            <TableData>Forskuddsløsningen</TableData>
            <TableData>Beskjed</TableData>
          </TableRow>
          <TableRow>
            <TableData>Sykdom i familien</TableData>
            <TableData>Beskjed</TableData>
          </TableRow>
          </tbody>
        </Table>
      </Innhold>
    </Layout>
  )
};

export default Status;
