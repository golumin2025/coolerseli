import { fields } from "@keystatic/core";

export const general = {
  label: "General Settings",
  path: "src/data/singletons/general",
  schema: {
    businessName: fields.text({ label: "Business Name", validation: { isRequired: true }}),
    logo: fields.object(
      {
        logo: fields.image({
          label: "Logo",
          directory: "/src/assets/images/general",
          publicPath: "/src/assets/images/general/",
        }),
        favicon: fields.image({
          label: "Favicon",
          directory: "/src/assets/images/general",
          publicPath: "/src/assets/images/general/",
          validation: { isRequired: true }
        }),
        footerLogo: fields.image({
          label: "Footer Logo",
          directory: "/src/assets/images/general",
          publicPath: "/src/assets/images/general/",
        }),
      },
      {
        label: "Site Images",
      },
    ),
    primaryColor: fields.text({
      label: "Primary Color",
      description: "The primary color used throughout the site",
      validation: { isRequired: true },
    }),
    secondaryColor: fields.text({
      label: "Secondary Color",
      description: "The secondary color used throughout the site",
      validation: { isRequired: true },
    }),
    backgroundColor: fields.text({
      label: "Background Color",
      description: "The background color used throughout the site",
      validation: { isRequired: true },
    }),
    contactInformation: fields.object(
      {
        email: fields.text({
          label: "Email Address",
          validation: { isRequired: true }
        }),
        phone: fields.text({
          label: "Phone Number",
          description: "This will be used in elements like tel:",
          validation: { isRequired: true }
        }),
        phoneDisplay: fields.text({
          label: "Phone Number Display",
          description: "Phone number as it appears in the user interface",
          validation: { isRequired: true }
        }),
      },
      {
        label: "General Information",
      },
    ),
    businessHours: fields.text({ label: "Business Hours" }),
    analyticsScripts: fields.array(
      fields.object({
        name: fields.text({ label: "Name" }),
        script: fields.text({ label: "Script", multiline: true }),
        location: fields.select({
          label: "Location",
          options: [
            { label: "Head", value: "head" },
            { label: "Body", value: "body" },
          ],
          defaultValue: "head",
        }),
      }),
      {
        label: "Analytics Scripts",
        itemLabel: (props) => props.fields.name.value,
      },
    ),
  },
};

