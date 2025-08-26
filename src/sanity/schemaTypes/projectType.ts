// /schemas/documents/project.ts

const PROJECT_TYPES = ['Senior Living', 'STR', 'Staging'] as const

const project = {
  name: 'project',
  title: 'Project',
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
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: { list: PROJECT_TYPES.map((t) => ({ title: t, value: t })) },
      validation: (R: any) => R.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City, state, or community name.',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'imageWithAlt',
      options: { hotspot: true },
      description: 'Shown on gallery cards and at the top of the project page.',
      validation: (R: any) => R.required(),
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'imageWithAlt' }],
      options: { layout: 'grid' },
      description: 'Additional project photos.',
    },
    {
      name: 'beforePhotos',
      title: 'Before Photos',
      type: 'array',
      of: [{ type: 'imageWithAlt' }],
      options: { layout: 'grid' },
      description: 'Before project photos.',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: '1–3 sentence overview shown on cards and at the top of the page.',
      validation: (R: any) => R.required().min(20).max(320),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'imageWithAlt' }],
      description: 'Detailed write‑up of the project.',
    },
    {
      name: 'completedAt',
      title: 'Completed At',
      type: 'date',
      options: { dateFormat: 'YYYY-MM' },
      description: 'Month/year the project was completed.',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Feature this project on the homepage.',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'projectType',
      media: 'coverImage',
      completedAt: 'completedAt',
      location: 'location',
    },
    prepare({ title, subtitle, media, completedAt, location }: any) {
      const parts = [subtitle, location, completedAt ? new Date(completedAt).toISOString().slice(0, 7) : null]
        .filter(Boolean)
        .join(' • ')
      return {
        title,
        subtitle: parts || 'Project',
        media,
      }
    },
  },
}

export default project
