import NextAuth, { NextAuthOptions } from 'next-auth'
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity'
import {sanityClient} from "@api/sanity/sanity";

const options: NextAuthOptions = {
// @ts-ignore
    providers: [SanityCredentials(sanityClient)],
    session: {
        strategy: 'jwt'
    },
    secret: 'any-secret-word',
// @ts-ignore
    adapter: SanityAdapter(sanityClient)
}

export default NextAuth(options)