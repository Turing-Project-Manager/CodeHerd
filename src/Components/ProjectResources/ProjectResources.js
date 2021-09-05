import React from 'react'

const initialState = {
  content: '',
  name: '',
  project: {},
  resourceType: '',
  tags: []
}

const ProjectResources = () => {

  const [newResource, setNewResource] = useState(initialState)
  const [resources, setResources] = useState([])

  const handleResourceInput = (e) => {
    const { name, value } = e.target;
    setNewResource((prevState) => ({ ...prevState, [name]: value }));
  }

  const submitResource = (e) => {
    e.preventDefault();
    {newResource.content.length && newResource.name.length && newResource.resourceType.length &&
      setResources(allResources => [...allResources, newResource])
    }
    clearInputs();
  }

  const resourcesToDisplay = resources.map(resource => {
    return(
      <a className='proj-resource' 
        href={resource.content} 
        key={resource.content}>{resource.name}</a>
    )
  })

  const clearInputs = () => {
    setNewResource({...initialState})
  }

  return(
    <section className='project-resources'>
      <article className='s-h3 s-shadow-md resources-to-display'>
        <h3 className='s-text-center s-m-3'>Project resources</h3>
        {!resources.length ?
          <p className='s-font-lg s-text-center .s-m-3'>No project resources yet! Click below to add one.</p> :
          <div className='resource-names'>
            {resourcesToDisplay}
          </div>
        }
      </article>
      
      
    </section>
  )

}

export default ProjectResources