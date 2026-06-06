import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

// In-repo JSON for now. To move to a CMS later, swap the `loader` here
// (e.g. a Sanity/Contentful loader) and keep the same schema + page code.

const menu = defineCollection({
  loader: file("src/data/menu.json"),
  schema: z.object({
    category: z.enum(["sandwiches", "chicken", "salads", "sides", "drinks", "sauces", "desserts", "kids"]),
    name: z.string(),
    description: z.string().optional(),
    price: z.number().optional(),
    variants: z.array(z.object({ label: z.string(), price: z.number() })).optional(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

const locations = defineCollection({
  loader: file("src/data/locations.json"),
  schema: z.object({
    name: z.string(),
    address: z.string(),
    city: z.string(),
    hours: z.string().optional(),
    phone: z.string().optional(),
    mapUrl: z.string().optional(),
    orderUrl: z.string().url().optional(),
    placeholder: z.boolean().optional(),
  }),
});

export const collections = { menu, locations };
