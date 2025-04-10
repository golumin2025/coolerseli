import { fields } from "@keystatic/core";

export const footer = {
  label: "Footer",
  path: "src/data/singletons/footer",
  schema: {
    navitems: fields.array(
      fields.object({
        title: fields.text({ label: "Section Title", validation: { isRequired: true } }),
        links: fields.array(
          fields.object({
            label: fields.text({ label: "Label", validation: { isRequired: true } }),
            link: fields.text({ label: "Link", validation: { isRequired: true } }),
          }),
          {
            label: "Links",
            itemLabel: (props) => props.fields.label.value,
          },
        ),
      }),
      {
        label: "Footer Menu Items",
        itemLabel: (props) => props.fields.title.value,
      },
    ),
    socialLinks: fields.array(
      fields.object({
        label: fields.text({ label: "Label", validation: { isRequired: true } }),
        icon: fields.image({
          label: "Icon",
          directory: "/src/assets/images/social/",
          publicPath: "/src/assets/images/social/",
        }),
        link: fields.text({ label: "Link" }),
      }),
      { label: "Social Links", itemLabel: (props) => props.fields.label.value },
    ),
    legal: fields.array(
      fields.object({
        label: fields.text({ label: "Label" }),
        link: fields.text({ label: "Link" }),
      }),
      {
        label: "Label Links",
        itemLabel: (props) => props.fields.label.value,
      },
    ),
  },
};
