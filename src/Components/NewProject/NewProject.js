import React, { useReducer, useEffect } from 'react';

import PropTypes from 'prop-types'


const NewProject = () => {

 
  return(
    <form>
      <input 
        type='text'
        placeholder='Project Title'
        name='title'
        value={project.title}
        onChange={handleInput}
      />

      <input 
        type='text'
        placeholder='Project Description'
        name='description'
        value={project.description}
        onChange={handleInput}
      />  

      <label>Module: 
        <select name='module' value={project.module} onChange={handleInput}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>  
      </label>
    </form>
  )
}

export default NewProject