// import {defineDocumentType, makeSource} from 'contentlayer/source-files'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// import rehypeSlug from 'rehype-slug'
// import rehypePrettyCode from 'rehype-pretty-code'
// import remarkGfm from 'remark-gfm'


//https://contentlayer.dev/docs/getting-started-cddd76b7#nextjs-configuration
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkMath from "remark-math";  // https://dev.to/kouliavtsev/how-to-use-katex-to-render-math-formulas-with-nextjs-38p1 - this fixes latex math
import rehypeKatex from "rehype-katex";
import remarkGfm from 'remark-gfm'; // https://github.com/shadcn/next-contentlayer/issues/6 - this fixes tables

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true},
    date: { type: 'date', required: true },
    tags: { type: 'string', list: true,},
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post], 
    mdx: { 
      remarkPlugins: [remarkMath, remarkGfm], 
      rehypePlugins: [rehypeKatex],
  },
  markdown: { 
      remarkPlugins: [remarkMath, remarkGfm], 
      rehypePlugins: [rehypeKatex],
  }
  })


