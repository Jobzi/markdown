import React, { useEffect } from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkReact from 'remark-react'
import { defaultSchema } from 'hast-util-sanitize'
import '../style/preview.css'
import 'github-markdown-css/github-markdown.css'


const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code || []), 'className']
  }
}

function Preview({doc}) {

  useEffect(()=>{
    console.log(doc)
  },[doc])
    const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, {
      createElement: React.createElement,
      sanitize: schema
    })
    .processSync(doc).result
  return <div className='preview markdown-body'>{md}</div>
}

export default Preview