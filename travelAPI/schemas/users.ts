import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'login',
      title: 'Index',
      type: 'string'
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
    }),
    defineField({
      name: 'favoritePlaces',
      title: 'Favorite Places',
      type: 'array',
      of: [{type: 'reference', to: {type: 'places'}}]
    }),
  ],
  preview: {
    select: {
      title: 'login',
      media: 'logo',
    },
  },
})
