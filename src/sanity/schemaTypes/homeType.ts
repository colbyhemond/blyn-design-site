// schemas/homePage.js
import { defineType, defineField } from 'sanity'
import { ImageIcon, HomeIcon } from '@sanity/icons'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          description: 'Main headline text',
        }),
        defineField({
          name: 'subhead',
          title: 'Subhead',
          type: 'text',
          rows: 2,
          description: 'Supporting subheading text',
        }),
        defineField({
          name: 'ctaLabel',
          title: 'CTA Label',
          type: 'string',
          description: 'Button text (e.g. "View Our Work")',
        }),
        defineField({
          name: 'ctaHref',
          title: 'CTA Link',
          type: 'string',
          description: 'Button link (e.g. /projects)',
        }),
        defineField({
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              description: 'Alternative text for screen readers and SEO',
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'hero.headline',
      media: 'hero.image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Home Page',
        media: media || ImageIcon,
      }
    },
  },
})
