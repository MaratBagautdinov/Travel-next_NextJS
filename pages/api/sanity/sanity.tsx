import { definePreview } from 'next-sanity/preview'
import { createClient } from 'next-sanity'
import { PortableText as PortableTextComponent } from '@portabletext/react'
import createImageUrlBuilder from '@sanity/image-url'

const config = {
    projectId: '6n813327',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: false,
}
export const sanityClient = createClient(config)

export const usePreview = definePreview(config)
export const urlFor = source => createImageUrlBuilder(config).image(source)
export const PortableText = (props) => <PortableTextComponent components={{}} {...props} />