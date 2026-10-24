export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "content/css": "css" });

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "_includes"
    }
  };
}
