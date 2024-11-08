import { SmallIcon } from '../../common/styles/images';
import { Container, TableBox, Table, Thead, Tbody, Tr, Td, ActionTd, ActionButton, Title, Text, Navbox, NavButton } from './style';

export default function SessionList() {
    const arrJson = [
        {
            id: 1,
            waveType: 'Tipo 1',
            date: '2021-10-10',
            time: '09:00',
            createdAt: '2021-10-10 10:00',
            status: 'Ativo'
        },
        {
            id: 2,
            waveType: 'Tipo 2',
            date: '2021-10-10',
            time: '10:30',
            createdAt: '2021-10-10 10:00',
            status: 'Ativo'
        },
        {
            id: 3,
            waveType: 'Tipo 3',
            date: '2021-10-10',
            time: '12:00',
            createdAt: '2021-10-10 10:00',
            status: 'Ativo'
        },
        {
            id: 4,
            waveType: 'Tipo 4',
            date: '2021-10-10',
            time: '13:30',
            createdAt: '2021-10-10 10:00',
            status: 'Ativo'
        },
        {
            id: 5,
            waveType: 'Tipo 5',
            date: '2021-10-10',
            time: '15:00',
            createdAt: '2021-10-10 10:00',
            status: 'Ativo'
        },
        {
            id: 6,
            waveType: 'Tipo 6',
            date: '2021-10-10',
            time: '16:30',
            createdAt: '2021-10-10 10:00',
            status: 'Ativo'
        },
        {
            id: 7,
            waveType: 'Tipo 7',
            date: '2021-10-10',
            time: '18:00',
            createdAt: '2021-10-10 10:00',
            status: 'Ativo'
        },
        {
            id: 8,
            waveType: 'Tipo 8',
            date: '2021-10-10',
            time: '19:30',
            createdAt: '2021-10-10 10:00',
            status: 'Ativo'
        },
        {
            id: 9,
            waveType: 'Tipo 9',
            date: '2021-10-10',
            time: '21:00',
            createdAt: '2021-10-10 10:00',
            status: 'Ativo'
        },
        {
            id: 10,
            waveType: 'Tipo 10',
            date: '2021-10-10',
            time: '22:30',
            createdAt: '2021-10-10 10:00',
            status: 'Ativo'
        }
    ]

    function handlePrevius() {
        console.log('Previous')
    }

    function handleNext() {
        console.log('Next')
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
                            arrJson.map((item) => (
                                <Tr 
                                    key={arrJson.indexOf(item)}
                                >
                                    <Td><Text>
                                        {item.id}
                                    </Text></Td>
                                    <Td><Text>
                                        {item.waveType}
                                    </Text></Td>
                                    <Td><Text>
                                        {item.date}
                                    </Text></Td>
                                    <Td><Text>
                                        {item.time}
                                    </Text></Td>
                                    <Td><Text>
                                        {item.createdAt}
                                    </Text></Td>
                                    <Td><Text>
                                        {item.status}
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