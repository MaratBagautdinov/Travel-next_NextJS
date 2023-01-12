import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'places',
    title: 'Places',
    type: 'document',
    fields: [
        defineField({
            name: 'location',
            title: 'Location',
            type: 'object',
            fields:[
                {
                    name: 'country',
                    title: 'Country',
                    type: 'string',
                },
                {name: 'city', title: 'City', type: 'string'},
            ]
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'location.city',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'number',
        }),
        defineField({
            name: 'imageLink',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            initialValue: 0,
            validation: Rule => Rule.required().positive().min(0).max(5)
        }),
        defineField({
            name: 'subscribers',
            title: 'Subscribes',
            type: 'array',
            of: [{type: 'string'}],
            initialValue: []
        }),
    ],

    preview: {
        select: {
            title: 'location.city',
            media: 'imageLink',
        }
    },
})
