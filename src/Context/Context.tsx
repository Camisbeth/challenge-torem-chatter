import { createContext, useState } from 'react';
import { TicketData } from '../types/chat';

type contextValues = { ticket: TicketData | null; setTicket: (ticket: TicketData | null) => void };

const defaultValues: contextValues = { ticket: null, setTicket: () => {} };

const TicketContext = createContext(defaultValues);

type Props = { children: React.ReactNode };

export const TicketProvider = ({ children }: Props) => {
  const [ticket, setTicket] = useState<TicketData | null>(null);

  return <TicketContext.Provider value={{ ticket, setTicket }}>{children}</TicketContext.Provider>;
};

export default TicketContext;
