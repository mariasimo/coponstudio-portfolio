import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import './App.css';

const strapi = new Strapi('http://localhost:1337');
// const strapi = new Strapi(`${process.env.REACT_APP_API_URL}`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    strapi.getEntries('projects')
    .then( projects => {
      this.setState({ projects })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className='App'>
        <section>
          {this.state.projects.map(project => 
            <article key={project.id}>
              <img src={`http://localhost:1337${project.featureImage.url}`} style={{maxWidth:'300px'}}/>
            </article>  
          )}
        </section>
      </div>
    );
  }
}

export default App;
