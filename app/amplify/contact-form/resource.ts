import { defineFunction } from "@aws-amplify/backend";
    
export const contactFormFunction = defineFunction({
  name: "contact-form",
  entry: "./handler.ts"
});