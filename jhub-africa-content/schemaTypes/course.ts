import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'cost',
      title: 'Cost',
      type: 'number',
    }),
    defineField({
      name: 'costPerLearner',
      title: 'Cost Per Learner',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'sku',
      title: 'SKU',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'sku',
    },
  },
})
