import React from "react";
import { Button } from "@chakra-ui/core";
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/core";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import "./App.css";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
const httpLink = createHttpLink({ uri: "http://www.secondpage.de/blog/graphql" });

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      // userToken: "user-token",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function LeanScopeData() {
  const { loading, error, data } = useQuery(gql`
  {
    posts {
      nodes {
        guid
        title
        content
        uri
      }
    }
  }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {JSON.stringify(error)}</p>;
  // console.log(data);
  return data.posts.nodes.map(({guid, title, content, uri }) => (


    <AccordionItem key={guid}>
      <AccordionHeader>
        <Box flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionHeader>
      <AccordionPanel pb={4}>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </AccordionPanel>
    </AccordionItem>

  ));
}

function App() {
  return (
    <ThemeProvider>
      <CSSReset />

      <div className="App">

        <ApolloProvider client={client}>
          <div>
            <Button variantColor="green">Button</Button>
            <Accordion>
              <LeanScopeData />
            </Accordion>
          </div>
        </ApolloProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
