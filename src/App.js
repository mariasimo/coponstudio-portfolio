import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/Constants';
import { GlobalStyles } from './styled-components/global';
import ReactHtmlParser from 'react-html-parser';
import HomePage from './components/homePage';
import WorksPage from './components/worksPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      const intro = ReactHtmlParser(res[0].aboutUs);
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
      const contact = ReactHtmlParser(res[0].Text);
      let credits = res[1].Text;
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
      
        <GlobalStyles />
       
        <div className='App'>
          <Switch>
            <Route exact path='/'>
                <HomePage {...this.state}></HomePage>
            </Route> 
            <Route exact path="/works">
                <WorksPage></WorksPage>
            </Route>
          </Switch>
        </div>
      
    </ThemeProvider>
    );
  }
}

export default App;
