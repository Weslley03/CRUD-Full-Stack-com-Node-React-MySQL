import React from "react";
import styled from "styled-components";
//import axios from 'axios'
import { FaTrash, FaEdit } from "react-icons/fa";
//import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

const Tr = styled.tr``;

const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Thead = styled.thead``;
const Tbody = styled.tbody``;

function Grid({ users }) {

    if(!users){
        return <p>carregando...</p>
    }
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th $onlyWeb>Fone</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, i) => (
            <Tr key={i}>
              <Td width="30%"> {user.nameUsers} </Td>
              <Td width="30%"> {user.emailUsers} </Td>
              <Td width="20%" $onlyWeb>
                {user.fone}
              </Td>
              <Td width="5%">
                <FaEdit />
              </Td>
              <Td width="5%">
                <FaTrash />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export default Grid;
