import React, { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx'


const Templates = () => {

  const fePRtemplate = 'frontend-pr-template.md'
  const [fePR, setFePR] = useState('');

  useEffect(() => {
    import(`../../markdown/${fePRtemplate}`)
      .then(res => {
        fetch(res.default)
        .then(res => setFePR(res))
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  })
  

  return(
    <section className="templates">
      <Markdown>
          {/* {post} */}
      </Markdown>
    </section>
  )


}

export default Templates