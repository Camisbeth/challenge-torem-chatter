import * as Menu from '@radix-ui/react-context-menu';
import styled from 'styled-components';
import TicketContext from '../../Context/Context';
import { useContext } from 'react';
import { MockTicketData } from '../../utils/mockData';

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  padding: 5px;
`;

const Item = styled(Menu.Item)`
  color: #000;
  padding: 3px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #36dd81;
  }
`;

export default function ChatTabContextMenu() {
  const { setTicket } = useContext(TicketContext);

  const handleShowOpenTicket = () => {
    console.log('Opened ticket...');
    // ✔TODO: Show open ticket component.
    setTicket(MockTicketData[0]);
  };

  const handleShowClosedTicket = () => {
    console.log('Closed ticket...');
    // ✔TODO: Show closed ticket component.
    setTicket(MockTicketData[1]);
  };

  return (
    <Container>
      <Item onClick={handleShowOpenTicket}>Ver ticket abierto</Item>
      <Menu.Separator />
      <Item onClick={handleShowClosedTicket}>Ver ticket cerrado</Item>
    </Container>
  );
}
