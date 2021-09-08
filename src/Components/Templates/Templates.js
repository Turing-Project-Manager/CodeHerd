import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import fePrTemplate from '../../markdown/frontend-pr-template.md'
import bePrTemplate from '../../markdown/backend-pr-template.md'
import dtrTemplate from '../../markdown/dtr-template.md'

import './Templates.css'

const Templates = () => {

  const [showFePrTemplate, setShowFePrTemplate] = useState(false)
  const [showBePrTemplate, setShowBePrTemplate] = useState(false)
  const [showDtrTemplate, setShowDtrTemplate] = useState(false)
  const [fePR, setFePR] = useState('')
  const [dtr, setDtr] = useState('')
  const [bePR, setBePR] = useState('')

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

    fetch(bePrTemplate)
      .then((response) => 
        response.text())
      .then((text) => {
        setBePR(text)})
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getTemplates();
  }, [])

  const showCurrentTemplate = (e) => {
    if(e.target.id === 'fe-pr'){
      setShowFePrTemplate(true)
    }
    if(e.target.id === 'dtr'){
      setShowDtrTemplate(true)
    }
    if(e.target.id === 'bePR') {
      setShowBePrTemplate(true)
    }
  }

  const closeTemplate = () => {
    setShowDtrTemplate(false)
    setShowFePrTemplate(false)
    setShowBePrTemplate(false)
  }
  

  return(
    <section className="templates">
       <article className='s-h3 s-shadow-md links-to-display'>
        <h3 className='s-text-center s-m-3'>Project Templates</h3>
          <section className='template-buttons'>
             <button id='be-pr' onClick={showCurrentTemplate}>Backend PR Template</button>
            <button id='fe-pr' onClick={showCurrentTemplate}>Frontend PR Template</button>
            <button id='dtr' onClick={showCurrentTemplate}>DTR Template</button>
          </section>

            {showFePrTemplate &&
              <div className='template-modal'>
                <div className='template-div'></div>
                <button className='s-button-secondary close-btn' onClick={closeTemplate}>X</button>
                <ReactMarkdown children={fePR} />
              </div>
            }
            {showDtrTemplate &&
            <div className='template-modal'>
              <div className='template-div'></div>
              <button className='s-button-secondary close-btn' onClick={closeTemplate}>X</button>
              <ReactMarkdown children={dtr} />
              </div>
            }
      </article>
    </section>
  )


}

export default Templates