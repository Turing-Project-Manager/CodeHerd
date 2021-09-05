import React, { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx'


const Templates = () => {

  const fePRtemplate = 'frontend-pr-template.md'
  const [fePR, setFePR] = useState('')

  return(
    <section className="templates">
      <Markdown>
          {/* {post} */}
      </Markdown>
    </section>
  )


}

export default Templates