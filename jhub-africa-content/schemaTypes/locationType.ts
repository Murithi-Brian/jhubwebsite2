import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'locationType',
  title: 'Type of Location',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
