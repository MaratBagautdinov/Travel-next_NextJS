import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    defineField({
      name: 'login',
      title: 'Login',
      type: 'string'
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
    },
  },
})
