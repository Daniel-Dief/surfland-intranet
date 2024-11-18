import { useState } from 'react';

import { SmallIcon } from '../../common/styles/images';
import { Container, TableBox, Table, Thead, Tbody, Tr, Td, ActionTd, ActionButton, Title, Text, Navbox, NavButton } from './style';

import { useMySessions } from '../../hooks/useMySessions';

export default function SessionList() {
    const [page, setPage] = useState<number>(1);
       
    const responseJson = useMySessions(page);

    function handlePrevius() {
        if (page > 1) { setPage(page - 1) };
    }

    function handleNext() {
        if (responseJson.totalPages > page) { setPage(page + 1) };
    }

    function handleDelete(id: number) {
        console.log('Delete: ' + id)
    }

    return (
        <Container>
            <TableBox>
                <Table>
                    <Thead>
                        <Tr>
                            <Td><Title>Indentificador</Title></Td>
                            <Td><Title>Tipo de onda</Title></Td>
                            <Td><Title>Data marcada</Title></Td>
                            <Td><Title>Horário</Title></Td>
                            <Td><Title>Criado em</Title></Td>
                            <Td><Title>Status</Title></Td>
                            <Td><Title>Ações</Title></Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            responseJson.data.map((item) => (
                                <Tr 
                                    key={responseJson.data.indexOf(item)}
                                >
                                    <Td><Text>
                                        {item.id}
                                    </Text></Td>
                                    <Td><Text>
                                        {item.waveType}
                                    </Text></Td>
                                    <Td><Text>
                                        {item.waveDate}
                                    </Text></Td>
                                    <Td><Text>
                                        {item.waveTime}
                                    </Text></Td>
                                    <Td><Text>
                                        {item.createdAt.toISOString()}
                                    </Text></Td>
                                    <Td><Text>
                                        {item.statusId}
                                    </Text></Td>
                                    <ActionTd>
                                        <ActionButton
                                            title="Excluir ticket"
                                            src={require("../../assets/images/trash.png")}
                                            onClick={() => handleDelete(item.id)}
                                        />
                                    </ActionTd>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableBox>
            <Navbox>
                <NavButton onClick={handlePrevius}>
                    <SmallIcon src={ require("../../assets/images/previus.png") }/>
                    Anterior
                </NavButton>
                <NavButton onClick={handleNext}>
                    Proxima
                    <SmallIcon src={ require("../../assets/images/next.png") }/>
                </NavButton>
            </Navbox>
        </Container>
    )
}