import { fields } from "@keystatic/core";

export const mainHero = {
  label: "Main Hero",
  schema: fields.object({
    sliderImages: fields.array(
      fields.object({
        image: fields.image({
          label: "Slider",
          directory: "/src/assets/images/",
          publicPath: "/src/assets/images/",
          validation: { isRequired: true },
        }),
        title: fields.text({ label: "Title" }),
        description: fields.text({ label: "Description", multiline: true }),
      }),
      {
        label: "Slider Images",
        itemLabel: (props) => props.fields.title.value,
      },
    ),
  }),
};

export const twoColWithTabs = {
  label: "Two Column With Tabs",
  schema: fields.object({
    heading: fields.text({ label: "Heading" }),
    tabs: fields.array(
      fields.object({
        title: fields.text({
          label: "Tab Title",
          validation: { isRequired: true },
        }),
        steps: fields.array(
          fields.object({
            title: fields.text({
              label: "Step Title",
              validation: { isRequired: true },
            }),
            description: fields.text({
              label: "Step Description",
              multiline: true,
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Steps",
            itemLabel: (props) => props.fields.title.value,
          },
        ),
      }),
      {
        label: "Tabs",
        itemLabel: (props) => props.fields.title.value,
      },
    ),
  }),
};

export const findYouFit = {
  label: "Find Your Fit",
  schema: fields.object({
    heading: fields.text({ label: "Heading" }),
    tabs: fields.array(
      fields.object({
        title: fields.text({ label: "Tab Title" }),
        images: fields.array(
          fields.image({
            label: "Image URL",
            directory: "/src/assets/images/",
            publicPath: "/src/assets/images/",
          }),
          { label: "Images" },
        ),
        description: fields.text({ label: "Description", multiline: true }),
        dimensions: fields.text({ label: "Dimensions" }),
        storageSize: fields.text({ label: "Storage Size" }),
        fits: fields.text({ label: "Fits" }),
      }),
      {
        label: "Tabs",
        itemLabel: (props) => props.fields.title.value,
      },
    ),
  }),
};

export const featuredImage = {
  label: "Featured Image",
  schema: fields.object({
    image: fields.image({
      label: "Image",
      directory: "/src/assets/images/",
      publicPath: "/src/assets/images/",
      validation: { isRequired: true },
    }),
    altTag: fields.text({ label: "Alt Tag", validation: { isRequired: true } }),
    title: fields.text({ label: "Title" }),
    description: fields.text({ label: "Description", multiline: true }),
  }),
};

export const reviewsSlider = {
  label: "Reviews Slider",
  schema: fields.object({
    title: fields.text({ label: "Title" }),
    logos: fields.array(
      fields.object({
        image: fields.image({
          label: "Logo",
          directory: "/src/assets/images/",
          publicPath: "/src/assets/images/",
        }),
      }),
      {
        label: "Logos",
      },
    ),
  }),
};

export const faqs = {
  label: "FAQs",
  schema: fields.object({
    title: fields.text({ label: "Title" }),
    faqs: fields.array(
      fields.object({
        question: fields.text({
          label: "Question",
          validation: { isRequired: true },
        }),
        answer: fields.markdoc.inline({
          label: "Answer",
        }),
      }),
      {
        label: "FAQs",
        itemLabel: (props) => props.fields.question.value,
      },
    ),
  }),
};

export const masonaryGallery = {
  label: "Masonary Gallery",
  schema: fields.object({
    title: fields.text({ label: "Title" }),
    images: fields.array(
      fields.object({
        image: fields.image({
          label: "Image",
          directory: "/src/assets/images/",
          publicPath: "/src/assets/images/",
          validation: { isRequired: true },
        }),
        altTag: fields.text({
          label: "Alt Tag",
          validation: { isRequired: true },
        }),
      }),
      { label: "Images", itemLabel: (item) => item.fields.altTag.value },
    ),
  }),
};

export const singleHero = {
  label: "Single Hero",
  schema: fields.object({
    bgImage: fields.image({
      label: "BackGround Image",
      directory: "/src/assets/images",
      publicPath: "/src/assets/images",
    }),
    title: fields.text({ label: "Title" }),
    description: fields.text({ label: "Description", multiline: true }),
  }),
};

export const storageOptions = {
  label: "Storage Options",
  schema: fields.object({
    title: fields.text({ label: "Title" }),
    cards: fields.array(
      fields.object({
        image: fields.image({
          label: "Image",
          directory: "/src/assets/images",
          publicPath: "/src/assets/images",
        }),
        size: fields.text({ label: "Size" }),
        dimension: fields.text({ label: "Dimension" }),
        description: fields.array(fields.text({ label: "Description" }), {
          label: "Description Items",
        }),
        link: fields.text({ label: "CTA Link" }),
      }),
      {
        label: "Storage Containers",
        itemLabel: (item) => item.fields.size.value,
      },
    ),
  }),
};

export const protectionConvenience = {
  label: "Protection & Convenience Features",
  schema: fields.object({
    title: fields.text({ label: "Title" }),
    cards: fields.array(
      fields.object({
        icon: fields.image({
          label: "Icon",
          directory: "/src/assets/icons",
          publicPath: "/src/assets/icons",
        }),
        title: fields.text({ label: "Title" }),
        description: fields.text({ label: "Description", multiline: true }),
      }),
      {
        label: "Storage Containers",
        itemLabel: (item) => item.fields.title.value,
      },
    ),
  }),
};

export const twoCol = {
  label: "Two Column",
  schema: fields.object({
    heading: fields.text({ label: "Heading" }),
    image: fields.image({
      label: "Image",
      directory: "/src/assets/images",
      publicPath: "/src/assets/images",
    }),
    altTag: fields.text({ label: "Alt Tag", validation: { isRequired: true } }),
    imagePlacement: fields.select({
      label: "Image Placement",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
      ],
      defaultValue: "left",
    }),
    description: fields.markdoc.inline({ label: "Description" }),
    button: fields.object({
      label: fields.text({ label: "Button Label" }),
      link: fields.text({ label: "Button link" }),
    }),
    colors: fields.select({
      label: "Color Scheme",
      options: [
        { label: "Blue", value: "#0069e5" },
        { label: "Blue with opacity", value: "#0069e5/5" },
      ],
      defaultValue: "#0069e5/5",
    }),
  }),
};

export const cards = {
  label: "Cards With Title",
  schema: fields.object({
    title: fields.text({ label: "Title" }),
    cards: fields.array(
      fields.object({
        image: fields.image({
          label: "Image",
          directory: "/src/assets/images",
          publicPath: "/src/assets/images",
        }),
        title: fields.text({ label: "Title" }),
        description: fields.markdoc.inline({ label: "Description" }),
      }),
      {
        label: "Storage Containers",
        itemLabel: (item) => item.fields.title.value,
      },
    ),
  }),
};

export const singleImage = {
  label: "Single Image",
  schema: fields.object({
    image: fields.image({
      label: "Image",
      directory: "/src/assets/images",
      publicPath: "/src/assets/images",
      validation: { isRequired: true },
    }),
    altTag: fields.text({ label: "Alt Tag", validation: { isRequired: true } }),
    mobile: fields.image({
      label: "Mobile Image",
      directory: "/public/images/",
      publicPath: "/images/",
      validation: { isRequired: true },
    }),
  }),
};

export const serviceAreas = {
  label: "Service Areas",
  schema: fields.object({
    title: fields.text({ label: "Title" }),
    sectionTitle: fields.text({ label: "Section Title" }),
    locations: fields.array(
      fields.object({
        title: fields.text({ label: "Title" }),
        link: fields.text({ label: "Link" }),
      }),
      {
        label: "Locations",
        itemLabel: (props) => props.fields.title.value,
      },
    ),
    colTwoTitle: fields.text({ label: "Column Two Title" }),
    colTwoDescription: fields.text({
      label: "Column Two Description",
      multiline: true,
    }),
    button: fields.object({
      title: fields.text({ label: "Button Title" }),
      link: fields.text({ label: "Button Link" }),
    }),
  }),
};
