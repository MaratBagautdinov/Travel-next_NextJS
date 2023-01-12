import { signUpHandler } from 'next-auth-sanity'
import { sanityClient } from '@api/sanity/sanity'
// @ts-ignore
export default signUpHandler(sanityClient)