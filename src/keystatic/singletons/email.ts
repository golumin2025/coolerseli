import { fields } from "@keystatic/core";

export const email = {
  label: "Emails",
  path: "src/data/singletons/email",
  schema: {
    logo: fields.object(
      {
        imageUrl: fields.text({
          label: "Image URL",
          validation: { isRequired: true }
        }),
        altTag: fields.text({ label: "Alt Text", validation: { isRequired: true }}),
      },
      {
        label: "Email Logo",
        description:
          "This is the logo that will show at the top of your emails.",
      },
    ),
    fromEmail: fields.text({
      label: "Email Address",
      description:
        "This is the email address from which emails are sent. Please do not change this without first confirming with the development team.",
      validation: { isRequired: true }
    }),
    fromEmailName: fields.text({
      label: "Email Name",
      description:
        "This is that will show in emails sent from the website in the 'From' field.",
      validation: { isRequired: true }
    }),
    adminEmailRecipients: fields.array(
      fields.object({
        name: fields.text({ label: "Name", validation: { isRequired: true }}),
        email: fields.text({ label: "Email", validation: { isRequired: true }}),
      }),
      {
        label: "Admin Email Recipients",
        itemLabel: (props) => props.fields.name.value,
      },
    ),
    clientEmailRecipientsBcc: fields.array(
      fields.object({
        name: fields.text({ label: "Name", validation: { isRequired: true }}),
        email: fields.text({ label: "Email", validation: { isRequired: true }}),
      }),
      {
        label: "Client Email BCC Recipients",
        itemLabel: (props) => props.fields.name.value,
      },
    ),
  },
};
