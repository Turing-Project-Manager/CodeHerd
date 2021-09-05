import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import fePrTemplate from '../../markdown/frontend-pr-template.md'
import dtrTemplate from '../../markdown/dtr-template.md'

const Templates = () => {

  // const [showTemplate, setShowTemplate] = useState(false)
  const [fePR, setFePR] = useState('');
  const [dtr, setDtr] = useState('')

  const getTemplates = () => {
    fetch(fePrTemplate)
      .then((response) => 
        response.text())
      .then((text) => {
        setFePR(text)})
      .catch(err => console.log(err));

    fetch(dtrTemplate)
      .then((response) => 
        response.text())
      .then((text) => {
        setDtr(text)})
      .catch(err => console.log(err));
  }
  console.log(dtr, fePR)

  useEffect(() => {
    getTemplates();
  })
  

  return(
    <section className="templates">
      <h2>a template</h2>
      <ReactMarkdown children={fePR} />
    </section>
  )


}

export default Templates