const STUDIO_REWRITE = {
  source: '/studio/:path*',
  destination:
      process.env.NODE_ENV === 'development'
          ? 'http://localhost:3333/studio/:path*'
          : '/travelapp/index.html',
}

module.exports = {
  reactStrictMode: true,
  env: {
    APP_URL: 'http://localhost:3000',
    NEXTAUTH_URL: 'http://localhost:3000',
    SANITY_API_TOKEN: 'skUl6egNczkA3O5h1krBAJnnY3yEYrO3f9mqFymTo8zVcPNRjgt77mlvFHGCPAEItAphQbnplLEifkzMx2MPPvXnQ3Tf9I1JQyVYr5AwyFbWlAyFKoMoX3DeUmYEU3Q5fcPb9Pq3SgLTWmxO5K1kSq85WVQGd1sEO1DqPXpIgBOZwgrNNQlK'
  },
  rewrites: () => [STUDIO_REWRITE],
}
