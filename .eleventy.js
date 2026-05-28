const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};
      
	eleventyConfig.setLibrary("md", markdownIt(options).disable('code'));
    eleventyConfig.addCollection("card", function (collectionApi) {
    return collectionApi.getFilteredByTag("card").sort((b, a) => {
        return (a.data.order || 0) - (b.data.order || 0);
      });
    });

    eleventyConfig.addPassthroughCopy ("./src/style.css");
    eleventyConfig.addPassthroughCopy ('./src/assets/');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};



