import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import './App.scss';
import Hero from './components/hero';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/Constants';
import { GlobalStyles } from './styled-components/global';
import ReactHtmlParser from 'react-html-parser';
import Works from './components/works';

const strapi = new Strapi('http://localhost:1337');
// const strapi = new Strapi(`${process.env.REACT_APP_API_URL}`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
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
    this.setState({...this.state, theme})
  }

  fetchWorks = () => {
    strapi.getEntries('projects').then(works => {
      this.setState({ ...this.state, works });
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
      this.setState({ ...this.state, menu });
    });
  };

  componentDidMount() {
    this.fetchWorks();
    this.fetchIntro();
    this.fetchMenu();
  }

  render() {
    const { works, intro, menu, theme } = this.state;
    return (

      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
       
        <div className='App'>
        <section>
              <Hero menu={menu} intro={ ReactHtmlParser(intro) } toggleTheme={this.toggleTheme}></Hero>
              <Works works={works}></Works>
          </section>
        </div>
      </>
    </ThemeProvider>
    );
  }
}

export default App;
