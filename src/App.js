import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import './App.scss';
import Hero from './components/hero';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/Constants';
import { GlobalStyles } from './styled-components/global';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const strapi = new Strapi('http://localhost:1337');
// const strapi = new Strapi(`${process.env.REACT_APP_API_URL}`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      intro: '',
      menu: [],
      theme: 'light'
    };
  }

  toggleTheme = () => {
    let {theme} = this.state;
    if(theme === 'light') {
      theme = 'dark'
    } else {
      theme = 'light'
    }
    console.log(theme)
    this.setState({...this.state, theme})
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
    const { projects, intro, menu, theme } = this.state;
    return (

      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
       
         <div className='App'>
         <section>
         <Hero menu={menu} intro={ ReactHtmlParser(intro) } toggleTheme={this.toggleTheme}></Hero>
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
      </>
    </ThemeProvider>
      // <div className='App'>
      //   <section>
      //   <Hero menu={menu} intro={intro}></Hero>
      //     {projects.map(project => (
      //       <article key={project.id}>
      //         <h1>{project.Title}</h1>
      //         <img
      //           src={`http://localhost:1337${project.featureImage.url}`}
      //           style={{ maxWidth: '300px' }}
      //         />
      //       </article>
      //     ))}
      //   </section>
      // </div>
    );
  }
}

export default App;
