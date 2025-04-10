import { fields } from "@keystatic/core";

export const header = {
  label: "Header",
  path: "src/data/singletons/header",
  schema: {
    menuItems: fields.array(
      fields.object({
        name: fields.text({ label: "Name", validation: { isRequired: true } }),
        link: fields.text({ label: "Link", validation: { isRequired: true } }),
        subMenu: fields.array(
          fields.object({
            name: fields.text({ label: "Name", validation: { isRequired: true } }),
            link: fields.text({ label: "Link", validation: { isRequired: true } }),
          }),
          {
            label: "Sub Menu",
            itemLabel: (props) => props.fields.name.value,
          },
        ),
      }),
      {
        label: "Menu Items",
        itemLabel: (props) => props.fields.name.value,
      },
    ),
    button: fields.conditional(
      fields.select({
        label: "Menu Button",
        description: "Optional button that will show on the far right side of the menu.",
        options: [
          { label: "No Button", value: "none" },
          { label: "Button", value: "button" },
        ],
        defaultValue: "none",
      }),
      {
        none: fields.empty(),
        button: fields.object({
          label: fields.text({ label: "Label", validation: { isRequired: true } }),
          link: fields.text({ label: "Link", validation: { isRequired: true } }),
        }),
      },
    ),
  },
};
