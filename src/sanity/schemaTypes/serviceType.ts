// /schemas/documents/service.ts
const Service = {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (R: any) => R.required().min(3),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title', maxLength: 96 },
        validation: (R: any) => R.required(),
      },
      {
        name: 'shortDescription',
        title: 'Short Description',
        type: 'text',
        rows: 3,
        description: '2–3 sentence summary used on cards and previews.',
        validation: (R: any) => R.min(20).max(300),
      },
      {
        name: 'thumb',
        title: 'Thumbnail',
        type: 'imageWithAlt', // use the object we defined earlier
        options: { hotspot: true },
        description: 'Shown on the services grid and previews.',
      },
      {
        name: 'highlights',
        title: 'Highlights (bullets)',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Key points (e.g., safety, durability, wayfinding).',
        validation: (R: any) => R.max(6),
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [{ type: 'block' }, { type: 'imageWithAlt' }],
        description: 'Full description for the service detail page.',
      },
      {
        name: 'faqs',
        title: 'FAQs (optional)',
        type: 'array',
        of: [{ type: 'qna' }],
        options: { sortable: true },
      },
      {
        name: 'ctaLabel',
        title: 'CTA Label (optional)',
        type: 'string',
        description: 'Button label (e.g., “Book a consult”).',
      },
      {
        name: 'ctaHref',
        title: 'CTA Link (optional)',
        type: 'string',
        description: 'Internal path or full URL (e.g., /contact).',
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number',
        description: 'Lower numbers show first on the Services page.',
        validation: (R: any) => R.min(0).max(999),
      },
      {
        name: 'seo',
        title: 'SEO',
        type: 'seo', // object with metaTitle/metaDescription/openGraphImage
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'shortDescription',
        media: 'thumb',
      },
      prepare({ title, subtitle, media }: any) {
        return {
          title,
          subtitle: subtitle ? subtitle.slice(0, 90) : 'Service',
          media,
        }
      },
    },
  }
  
  export default Service
  