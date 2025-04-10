import { fields } from "@keystatic/core";

export const blogs = {
  label: "Blogs",
  slugField: "title",
  path: "src/data/blogs/*",
  entryLayout: "content",
  format: {
    contentField: "content",
  },
  schema: {
    title: fields.slug({
      name: {
        label: "Blog Title",
        validation: { isRequired: true },
      },
    }),
    blogImage: fields.image({
      label: "Blog Image",
      directory: "/public/images/",
      publicPath: "/images/",
    }),
    publicationDate: fields.text({ label: "Published On", validation: { isRequired: true } }),
    draft: fields.checkbox({
      label: "Draft",
      defaultValue: true,
    }),
    seoData: fields.object({
      seoTitle: fields.text({ label: "SEO Title", validation: { isRequired: true } }),
      seoDescription: fields.text({
        label: "SEO Description",
        multiline: true,
        validation: { isRequired: true },
      }),
      ogImage: fields.image({
        label: "Open Graph Image",
        directory: "/public/images/seo/",
        publicPath: "/images/seo/",
      }),
    }),
    content: fields.markdoc({
      label: "Page Content",
      extension: "md",
    }),
  },
} as const;
