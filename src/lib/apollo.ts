import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6ufd70svj01xra6fh31ch/master',
  cache: new InMemoryCache()
});
