// Config

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    
    return{
        dir: {
            input: "src",
            includes: "_includes",
            output: "public"
        },
        permalink: (data) => {
            if (data.page.inputPath.includes('blog')) {
            const title = data.title ? data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : 
            'untitled';
            return `blog/${title}/`;}

            if (data.page.inputPath.includes('projects')) {
            const title = data.title ? data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : 
            'untitled';
            return `projects/${title}/`;}

            else {
                return data.page.fileSlug ? `${data.page.fileSlug}/` : 'index/';
            }
        }
    };
}