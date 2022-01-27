import { Box, Text, Image } from '@skynexui/components';
import appConfig from '../config.json';

export function MessageItem({message}) {
  return (
    <Text 
        tag='li'
        styleSheet={{
          borderRadius: '5px',
          padding: '6px',
          marginBottom: '12px',
          hover: {
            backgroundColor: appConfig.theme.colors.neutrals['700']
          }
        }}
      >
        <Box 
          styleSheet={{
            marginBottom: '8px'
          }}
        >
          <Image
            styleSheet={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '8px'
            }}
            src={`https://github.com/${message.from}.png`}
          />

          <Text tag='strong'>
            {message.from}
          </Text>

          <Text
            tag='span'
            styleSheet={{
              fontSize: '10px',
              marginLeft: '8px',
              color: appConfig.theme.colors.neutrals['300'],
            }}
          >
            { new Date().toLocaleDateString() }
          </Text>
        </Box>

        {message.messageText}
      </Text>
  );
}