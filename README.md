# Palisades timeline

This project has been built with Vue 3 + Vite. It has no communication with external APIs and the purpose is to represent historical moments (years) in a two-panel layout, left for descriptions and right for imaging. This application will be embedded into a parent website as a sub-section, so it should run in standalone mode with CORS policy enabled to allow the parent website to read the assets. Take a look at the `vercel.json` file for the cross-origin configuration. Currently, it has an automated CI/CD with vercel which is the platform the client is using to deploy their other services.

## Data structure

The data for the timeline is hardcoded in the following file `src/data.js` There's an array of objects (years) with the following format:

```
{
    id: 3,
    defaultImage: "https://svamm-icros.vercel.app/assets/images/section-3.png",
    year: 1943,
    title: "1943. The Naming of KT-22",
    description: "Sandy and Wayne Poulsen strap skins to their skis to climb ...",
    caption: "Some caption about the main image",
    author: "John Doe",
    expandable: true,
    expandedImage:"https://svamm-icros.vercel.app/assets/images/expanded-image.png",
    items: [
      {
        itemImage: "https://svamm-icros.vercel.app/assets/images/section-3-2.png",
        itemTitle: "1949. Opening Day",
        itemDescription: "On November 24, 1949, the first chair heads up the mountain...",
      },
      {
        itemImage: "https://svamm-icros.vercel.app/assets/images/section-3-3.png",
        itemTitle: "1955. John Reily Eyes Alpine Meadows",
        itemDescription: "A Los Angeles businessman named John Reily visits the Tahoe ...",
      }
    ]
}
```

The `id` field represents the position where the element (year) will appear on screen. The `defaultImage` is the image that will display on the right side of the screen as soon the section is 50% visible. Everything inside the `items` array represents an element in the left side of the screen that can be expanded/collapsed to show its detail text `itemDescription`. There are some cases when a year has an expanded view, that will be determined by setting the `expandable` property as true and that will require an `expandedImage` with a different aspect ratio. The templates are generated dynamically so in order to update the timeline content the only files that needs to be changed is `src/data.js` wether you are adding or removing content. All the assets should be put inside the public directory, otherwise, they will be included in the build and you should keep track of the build suffix such as `section-3-abcdef1234.png` in the image references which is hard to maintain by the time you want to deploy since the client has asked to provide absolute references to every single asset.

Since references in the final index.html file are controlled by vite - the builder - you need to specify the desired domain or base URL the client expects to have in the `vite.config.js` file.

For example:

```
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  base: "https://svamm-icros.vercel.app/",
});

```
