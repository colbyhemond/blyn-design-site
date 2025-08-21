// /schemas/objects/imageWithAlt.ts
const imageWithAlt = {
    name: 'imageWithAlt',
    title: 'Image',
    type: 'image',
    options: { hotspot: true },
    fields: [
      {
        name: 'alt',
        title: 'Alt text',
        type: 'string',
        description:
          'Describe the image for accessibility and SEO (what’s in the image, not “decorative”).',
        validation: (Rule: any) => Rule.required().min(3).max(160),
      },
      {
        name: 'caption',
        title: 'Caption (optional)',
        type: 'string',
      },
      {
        name: 'attribution',
        title: 'Attribution (optional)',
        type: 'string',
        description: 'Credit or source, if needed.',
      },
    ],
    preview: {
      select: { media: undefined, alt: 'alt' },
      prepare(selection: any) {
        return { title: selection.alt || 'Image', media: selection }
      },
    },
  }
  
  export default imageWithAlt
  