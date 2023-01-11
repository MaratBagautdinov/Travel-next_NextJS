import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'countries',
  title: 'Countries',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    })
  ],
})
