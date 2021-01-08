import withApollo from "next-with-apollo";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

export default withApollo(() => {
  return new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
  })
}, {
  render: ({Page, props}) => {
    return (
      <ApolloProvider client={props.apollo}>
        <Page {...props} />
      </ApolloProvider>
    )
  },
})