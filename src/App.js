import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import './App.scss';

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
        <p>
        Copón Studio is a creative couple 🐈🐈 working from sunny Murcia — Spain (mostly) on graphic + digital design projects. Our portfolio includes brand & identity design, ✏ illustration, user interface 👁 design and web development . We like to think at design and code as a ⁂ craftmanship ⁂ and to 💬 work next to people (clients, partners & colleagues) to achieve best results. 
        </p>
        <section>
          {this.state.projects.map(project => 
            <article key={project.id}>
              <h1>{project.Title}</h1>
              <img src={`http://localhost:1337${project.featureImage.url}`} style={{maxWidth:'300px'}}/>
            </article>  
          )}
        </section>
      </div>
    );
  }
}

export default App;
