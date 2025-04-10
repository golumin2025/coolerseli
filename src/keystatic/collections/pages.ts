import { fields } from "@keystatic/core";
import {
  featuredImage,
  twoColWithTabs,
  mainHero,
  findYouFit,
  reviewsSlider,
  faqs,
  masonaryGallery,
  singleHero,
  storageOptions,
  protectionConvenience,
  twoCol,
  cards,
  singleImage,
  serviceAreas
} from "@keystatic/blocks";

export const pages = {
  label: "Pages",
  slugField: "title",
  path: "src/data/pages/*" as const,
  schema: {
    title: fields.slug({
      name: {
        label: "Page Title",
      },
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
    blocks: fields.blocks(
      {
        cards,
        faqs,
        featuredImage,
        findYouFit,
        twoColWithTabs,
        mainHero,
        masonaryGallery,
        protectionConvenience,
        reviewsSlider,
        singleHero,
        singleImage,
        storageOptions,
        twoCol,
        serviceAreas
      },
      { label: "Blocks" },
    ),
  },
} as const;
