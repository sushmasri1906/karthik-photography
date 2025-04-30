// lib/sanity.ts
import { createClient } from "next-sanity";

export const client = createClient({
	projectId: "mm928jhb", // Replace with your project ID
	dataset: "production", // Use 'production' or your custom dataset
	apiVersion: "2023-01-01", // Adjust based on your version
	useCdn: true,
});
