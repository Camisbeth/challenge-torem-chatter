import styled from 'styled-components';
import { TicketPriority, TicketStatus } from '../types/chat';
import TicketContext from '../Context/Context';
import { useContext } from 'react';

const TicketContainer = styled.section<{ status: TicketStatus }>`
  background-color: ${(props) => (props.status === TicketStatus['CLOSED'] ? '#FF3633' : '#00DB77')};
  display: flex;
  flex-direction: column;
  gap: 15%;
  height: 105px;
  width: 338px;
  left: calc(60% - 169px);
  top: 16%;
  border-radius: 0px;
  position: absolute;
  z-index: 3;
  padding: 1%;
  overflow: hidden;
`;

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const TitleContainer = styled.h1`
  height: 15px;
  width: 200px;
  left: 0px;
  top: 0px;
  border-radius: nullpx;
  font-family: Helvetica;
  font-size: 13px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: ;
`;

const ParagraphContainer = styled.p`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
`;

const Description = styled.p`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 216px;
`;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 40%;
  height: 22px;

  flex: none;

  flex-grow: 0;
  margin: 0;
`;

const CircleUp = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  z-index: 2;
  position: absolute;
  right: 25%;
  top: -10%;
`;
const CircleDown = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  z-index: 2;
  position: absolute;
  right: 25%;
  bottom: -10%;
`;

const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: white;
  z-index: 2;
`;

const Brand = styled.p<{ status: TicketStatus }>`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  padding: 0% 4%;
  background-color: white;
  border-radius: 4px;
  color: ${(props) => (props.status === TicketStatus['CLOSED'] ? '#63656A' : '#00DB77')};
`;

const Priority = styled.p`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  padding: 0% 2%;
  color: #00db77;
  background-color: white;
  border-radius: 4px;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 2;
`;

function Ticket() {
  const { ticket, setTicket } = useContext(TicketContext);

  if (!ticket) return null;

  const priority = TicketPriority[ticket.priority];
  const status = ticket.status;

  return (
    <>
      <Overlay onClick={() => setTicket(null)} />
      <TicketContainer status={status}>
        <CircleUp />
        <CircleDown />
        <RowContainer>
          <TitleContainer>{ticket.title}</TitleContainer>

          <ParagraphContainer>{ticket.date.toLocaleDateString('es-AR')}</ParagraphContainer>
        </RowContainer>

        <RowContainer>
          <Description>{ticket.description}</Description>
          <Priority>{priority}</Priority>
        </RowContainer>

        <RowContainer>
          <BrandContainer>
            <Brand status={status}>{ticket.brand}</Brand>
            <Line />
            <ParagraphContainer>{ticket.tag}</ParagraphContainer>
          </BrandContainer>

          <ParagraphContainer>{ticket.id}</ParagraphContainer>
        </RowContainer>
      </TicketContainer>
    </>
  );
}

export default Ticket;
