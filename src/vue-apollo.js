import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Connection HTTP à l'API
const httpLink = createHttpLink({
	uri: process.env.VUE_APP_GRAPHQL_URL || 'http://localhost:1337/graphql',
})

// Implémentation du cache
const cache = new InMemoryCache()

// Création du client Apollo
const apolloClient = new ApolloClient({
	link: httpLink,
	cache,
})

export default apolloClient
