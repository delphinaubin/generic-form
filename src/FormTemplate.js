export const formTemplate = {
  slices: {
    userForm: {
      name: "User Form",
      fields: [
        {
          key: "name",
          placeholder: "Enter the user name",
          type: "text",
        },
      ],
    },
  },
  name: "My custom type",
  fields: [
    {
      key: "country",
      placeholder: "Choose a country",
      type: "select",
      options: [
        { label: "France", value: "fr" },
        { label: "England", value: "en" },
        { label: "USA", value: "us" },
        { label: "Canada", value: "ca" },
        { label: "Italy", value: "it" },
        { label: "Germany", value: "ge" },
      ],
    },
    // {
    //   key: "toto",
    //   type: "sliceZone",
    //   availableSlices: ["userForm"],
    // },
    {
      key: "title",
      placeholder: "Enter the page title",
      type: "text",
    },
    {
      key: "metadata",
      type: "fieldSet",
      name: "Page Metadata",
      fields: [
        {
          key: "htmlTitle",
          placeholder: "Enter the html title of the page",
          type: "text",
        },
        {
          key: "contentType",
          placeholder: "Enter the content type of the page",
          type: "text",
        },
      ],
    },
    {
      key: "users",
      type: "repeatableFieldSet",
      name: "Users",
      fields: [
        {
          key: "name",
          placeholder: "Enter the user name",
          type: "text",
        },
        {
          key: "address",
          placeholder: "Enter the user address",
          type: "text",
        },
        {
          key: "age",
          placeholder: "Enter the user age",
          type: "number",
        },
      ],
    },
  ],
};
