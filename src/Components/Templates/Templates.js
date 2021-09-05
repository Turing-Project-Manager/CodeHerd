import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import fePrTemplate from '../../markdown/frontend-pr-template.md'

const Templates = () => {

  const [fePR, setFePR] = useState('');

  useEffect(() => {
    fetch(fePrTemplate)
      .then((response) => response.text())
      .then((text) => {
        setFePR(text)})
      .catch(err => console.log(err));
  
  })
  

  return(
    <section className="templates">
      <h2>a template</h2>
      <ReactMarkdown children={fePR} />
    </section>
  )


}

export default Templates