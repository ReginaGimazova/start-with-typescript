import withApollo from 'next-with-apollo';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

export default withApollo(
  () => {
    const httpLink = new HttpLink({
      uri: 'http://localhost:5000/graphql',
    });

    const wsLink = process.browser
      ? new WebSocketLink({
          uri: 'ws://localhost:5000/graphql',
          options: {
            reconnect: true,
          },
        })
      : null;

    const link = process.browser
      ? split(
          ({ query }) => {
            const definition = getMainDefinition(query);
            return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
          },
          wsLink,
          httpLink,
        )
      : httpLink;

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  },
);
