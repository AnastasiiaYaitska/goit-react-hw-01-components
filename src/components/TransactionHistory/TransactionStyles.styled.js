import styled from "@emotion/styled";

export const TransactionTable = styled.table`
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 700px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    & thead tr {
    background-color: #05ACE6;
    color: #ffffff;
    text-align: left;
}

    & th,
    & td {
    padding: 12px 45px;
    text-align: center;
}

    & tbody tr {
    border-bottom: 1px solid #dddddd;
}

    & tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

    & tbody tr:last-of-type {
    border-bottom: 2px solid #05ACE6;
}

`;