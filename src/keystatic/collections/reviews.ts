import { fields } from "@keystatic/core";

export const reviews = {
  label: "Reviews",
  slugField: "name",
  path: "src/data/reviews/*" as const,
  schema: {
    name: fields.slug({
      name: {
        label: "Name",
        validation: { isRequired: true },
      },
    }),
    content: fields.text({
      label: "Review",
      multiline: true,
      validation: { isRequired: true },
    }),
  },
} as const;
