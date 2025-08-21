import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  // treat as singleton via Desk structure (one doc)
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'subhead', title: 'Subhead', type: 'text', rows: 2 }),
        defineField({
          name: 'image',
          title: 'Hero Image',
          type: 'imageWithAlt',
          options: { hotspot: true },
        }),
      ],
    }),

    defineField({
      name: 'intro',
      title: 'Intro (short)',
      type: 'text',
      rows: 3,
      description: '1–3 sentence intro near the top.',
    }),

    defineField({
      name: 'content',
      title: 'Main Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'imageWithAlt' }],
      description: 'Full bio / story / approach.',
    }),

    defineField({
      name: 'headshot',
      title: 'Headshot (optional)',
      type: 'imageWithAlt',
      options: { hotspot: true },
    }),

    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g., “E‑design, Staging/Redesign, Styling”, “Insured”, etc.',
    }),

    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({ name: 'href', title: 'Href', type: 'string' }),
      ],
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],

  preview: {
    select: { title: 'hero.headline', media: 'headshot' },
    prepare({ title, media }) {
      return { title: title || 'About Page', media }
    },
  },
})
