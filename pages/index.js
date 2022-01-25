import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Text,
  TextField,
  Image,
} from '@skynexui/components';
import appConfig from '../config.json';


function Title({ tag, children }) {
  const Tag = tag || 'h1';

  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>
        {`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals['000']};
          font-size: 24px;
          font-weight: 600;
        }
      `}

      </style>
    </>
  );
}

export default function Home() {
  // const username = 'joaovitorJS';
  const [username, setUsername] = useState('');
  const router = useRouter();

  function handleSubmitForm(event) {
    event.preventDefault();

    router.push('/chat');
  }

  return (
    <>
      <Box
        tag="main"
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%',
            maxWidth: '700px',
            borderRadius: '5px',
            padding: '32px',
            margin: '16px',
            backgroundColor: appConfig.theme.colors.neutrals['700'],
            boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <Box
            tag="form"
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: {
                xs: '100%',
                sm: '50%',
              },
              textAlign: 'center',
              marginBottom: '32px',
            }}
            onSubmit={handleSubmitForm}
          >
            <Title tag="h2">Boas vindas de volta!</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: '32px',
                color: appConfig.theme.colors.neutrals['300'],
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              name="username"
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals['200'],
                  mainColor: appConfig.theme.colors.neutrals['900'],
                  mainColorHighlight: appConfig.theme.colors.primary['500'],
                  backgroundColor: appConfig.theme.colors.neutrals['800'],
                },
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Button
              label="Entrar"
              type="submit"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary['500'],
                mainColorLight: appConfig.theme.colors.primary['400'],
                mainColorStrong: appConfig.theme.colors.primary['600'],
              }}
            />
          </Box>

          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals['800'],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals['999'],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            {username?.trim() !== '' && username.length > 2 &&
              <>
                <Image
                  src={`https://github.com/${username}.png`}
                  styleSheet={{
                    borderRadius: '50%',
                    marginBottom: '16px',
                  }}
                  alt={username}
                />

                <Text
                  variant="body4"
                  styleSheet={{
                    color: appConfig.theme.colors.neutrals['200'],
                    backgroundColor: appConfig.theme.colors.neutrals['900'],
                    padding: '3px 10px',
                    borderRadius: '1000px',
                  }}
                >
                  {username}
                </Text>
              </>
            }
          </Box>
        </Box>
      </Box>
    </>
  );
}

/*
function HomePage() {
  return (
    <div>
      <GlobalStyle />
      <Title tag="h2">Boas vindas de volta!</Title>
      <h2>Discord - Alura Matrix</h2>
    </div>
  );
}

export default HomePage;
*/
