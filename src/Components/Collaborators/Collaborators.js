import React from 'react'

const initialState = {
  name: '',
  email: '',
  isPM: false
}

const Collaborators = () => {

  const [newCollaborator, setNewCollaborator] = useState(initialState)
  const [collaborators, setCollaborators] = useState([])

  const handleCollabInput = (e) => {
    const { name, value } = e.target;
    setNewCollaborator((prevState) => ({ ...prevState, [name]: value }));
  }

  const submitCollaborator = (e) => {
    e.preventDefault();
    {newCollaborator.name.length && newCollaborator.email.length &&
      setCollaborators(allCollaborators => [...allCollaborators, newCollaborator])
    }
    clearInputs();
  }

  const collaboratorProfiles = collaborators.map(collaborator => {
    return(
      <article class="s-card s-card-profile s-border-yellow-500">
        <div class="s-card-header">
          <img class="s-card-profile-pic" src="https://d682ma8ami8n4.cloudfront.net/images/staff/kasperowicz.jpg" />
          <div class="s-card-header-right">
            <h2 class="s-card-title">Card Title</h2>
            <h3 class="s-card-subtitle">Card Subtitle</h3>
          </div> 
        </div> 
        <div class="s-card-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus odio quis sit mattis in luctus. Dignissim auctor aliquam suspendisse non in ac, purus. Aliquam arcu justo quam lorem at id proin morbi. A arcu accumsan, eu id fringilla non.</p>
        </div>
        <div class="s-card-footer">
          <button class="s-button s-button-secondary">Example Button</button>
        </div>
      </article>
    )
  })

  const clearInputs = () => {
    setNewCollaborator({...initialState})
  }

  return(
    <section className='project-collabs'>
    
      
    </section>

}

export default Collaborators