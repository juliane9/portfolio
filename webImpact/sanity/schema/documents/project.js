export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Allows cropping in the CMS
        },
      },
      {
        name: "githubUrl",
        type: "url",
        title: "GitHub URL"
      }
    ],
  };
  