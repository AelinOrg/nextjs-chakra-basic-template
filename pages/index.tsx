import { Flex, Heading, Box } from '@chakra-ui/react';
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Flex as="main" height="100vh" alignItems="center" justifyContent="center">
        <Heading size="md" borderWidth="medium" borderRadius="sm" p="2">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Heading>
      </Flex>
        
    </div>
  )
}

export default Home;