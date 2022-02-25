import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// 连接API 的 HTTP 绝对路径
const httpLink = createHttpLink({
    uri: 'http://localhost:8080/graphql',
})
// 缓存实现
const cache = new InMemoryCache()

// 创建 apollo 客户端实例
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

export default apolloClient