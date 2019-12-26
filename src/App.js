import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import './App.scss';
import Nav from './components/nav';

const strapi = new Strapi('http://localhost:1337');
// const strapi = new Strapi(`${process.env.REACT_APP_API_URL}`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      intro: '',
      menu: []
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

  fetchMenu = () => {
    strapi.getEntries('navigation-links').then(res => {
      const menu = res;
      console.log(menu)
      this.setState({ ...this.state, menu });
    });
  };

  componentDidMount() {
    this.fetchProjects();
    this.fetchIntro();
    this.fetchMenu();
  }

  render() {
    const { projects, intro, menu } = this.state;
    return (
      <div className='App'>
        <section>
        <p>{intro}</p>
        <Nav menu={menu}></Nav>
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
