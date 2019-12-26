import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import './App.scss';

const strapi = new Strapi('http://localhost:1337');
// const strapi = new Strapi(`${process.env.REACT_APP_API_URL}`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      intro: ''
    };
  }

  fetchProjects = () => {
    strapi.getEntries('projects').then(projects => {
      this.setState({ ...this.state, projects });
    });
  };

  fetchIntro = () => {
    strapi.getEntries('about-uses').then(res => {
      const intro = res[0].aboutUs;
      this.setState({ ...this.state, intro });
    });
  };

  componentDidMount() {
    this.fetchProjects();
    this.fetchIntro();
  }

  render() {
    const { projects, intro } = this.state;
    return (
      <div className='App'>
        <p>{intro}</p>
        <section>
          {projects.map(project => (
            <article key={project.id}>
              <h1>{project.Title}</h1>
              <img
                src={`http://localhost:1337${project.featureImage.url}`}
                style={{ maxWidth: '300px' }}
              />
            </article>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
