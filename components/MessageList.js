import { Box } from '@skynexui/components';
import appConfig from '../config.json';
import { MessageItem } from './MessageItem';

export function MessageList({messages}) {
  
  return (  
    <Box
      tag='ul'
      styleSheet={{
        overflow: 'scrollX',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px'
      }}
    >
      {messages.length > 0 && messages.map((message) => {
        return <MessageItem key={message.id} message={message}/>
      })}
    </Box>
  );
}