import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import './App.scss';
import Hero from './components/hero';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/Constants';
import { GlobalStyles } from './styled-components/global';
import ReactHtmlParser from 'react-html-parser';
import Works from './components/works';
import Footer from './components/footer';

const strapi = new Strapi('http://localhost:1337');
// const strapi = new Strapi(`${process.env.REACT_APP_API_URL}`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      menu: [],
      intro: '',
      works: [],
      contact: '',
      credits: '',
      socialMenu: [],
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

  fetchSocialMenu = () => {
    strapi.getEntries('social-links').then(res => {
      const socialMenu = res;
      this.setState({ ...this.state, socialMenu });
    });
  };

  fetchFooter = () => {
    strapi.getEntries('footer-copies').then(res => {
      const contact = res[0].Text;
      const credits = res[1].Text;
      this.setState({ ...this.state, contact, credits });
    });
  };
  
  componentDidMount() {
    this.fetchWorks();
    this.fetchIntro();
    this.fetchMenu();
    this.fetchSocialMenu();
    this.fetchFooter();
  }

  render() {
    const { works, intro, menu, theme, socialMenu, contact, credits } = this.state;
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
       
        <div className='App'>
          <Hero menu={menu} intro={ ReactHtmlParser(intro) } toggleTheme={this.toggleTheme} theme={theme}></Hero>
          <Works works={works}></Works>
          <Footer socialMenu={socialMenu} contact={ ReactHtmlParser(contact) } credits={credits}></Footer>
        </div>
      </>
    </ThemeProvider>
    );
  }
}

export default App;
