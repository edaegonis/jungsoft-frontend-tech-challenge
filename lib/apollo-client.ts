import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"

import fetch from "unfetch"
import { createHttpLink } from "apollo-link-http"

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.

  const link = createHttpLink({
    uri: "https://frontend-challenge.jungsoft.io/graphql",
    credentials: "same-origin",
    fetch: fetch,
  })

  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link,
    cache: new InMemoryCache().restore(initialState),
  })
}
