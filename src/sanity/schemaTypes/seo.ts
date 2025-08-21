// /schemas/objects/seo.ts
const seo = {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
      {
        name: 'metaTitle',
        title: 'Meta Title',
        type: 'string',
        description: 'Recommended ≤ 60 characters.',
        validation: (Rule: any) => Rule.max(60),
      },
      {
        name: 'metaDescription',
        title: 'Meta Description',
        type: 'text',
        rows: 3,
        description: 'Recommended 50–160 characters.',
        validation: (Rule: any) => Rule.max(160),
      },
      {
        name: 'openGraphImage',
        title: 'Open Graph Image',
        type: 'imageWithAlt',
        description: 'Shown in social shares (1200×630 recommended).',
      },
      {
        name: 'canonicalUrl',
        title: 'Canonical URL',
        type: 'url',
        description: 'Optional canonical URL for this page.',
      },
      {
        name: 'noindex',
        title: 'Noindex',
        type: 'boolean',
        description: 'Discourage search engines from indexing this page.',
        initialValue: false,
      },
    ],
    preview: {
      select: { title: 'metaTitle', media: 'openGraphImage' },
      prepare({ title, media }: any) {
        return { title: title || 'SEO', subtitle: 'Meta + Open Graph', media }
      },
    },
  }
  
  export default seo
  