import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import Nav from './nav';
import StyledSection from '../styled-components/styledSection';
import ReactHtmlParser from 'react-html-parser';


const strapi = new Strapi('http://localhost:1337');

class WorkSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      content: []
    };
  }
  fetchWorkData = () => {
    const { id } = this.props.match.params;
    console.log(id);

    strapi.getEntry('projects', id).then(res => {
      console.log(res.Intro, res.Content);
      this.setState(
        {
          ...this.state,
          title: res.Intro.Title,
          description: res.Intro.Description,
          content: res.Content
        },
        () => {
          console.log(this.state);
        }
      );
    });
  };

  componentDidMount() {
    this.fetchWorkData();
  }

  render() {
    const  {title, description, content} = this.state;

    return (
      <React.Fragment>
        <StyledSection>
          <div className='container'>
            <Nav {...this.props}></Nav>
          </div>
        </StyledSection>

        <section className="work-single fix-menu-here"> 
          <div className='container'>
              
              <div className="work-header">
                <h1>{title}</h1>
                <p>{description}</p>
              </div>

              <div className='work-body'>
                {content.map(row => 
                    <React.Fragment>
                      {/* // If the row contains images */}
                    {row.Image && 
                    <div className="wrapper-img">
                      {row.Image.map((img, _, arr) => {
                          const imgNum = arr.length;
                          return (
                            <div className={`width-${imgNum}`}><img src={`http://localhost:1337${img.url}`} alt={img.name}/></div>
                          );
                      })}
                    </div>}

                    {/* // If the row contains text */}
                    {row.Text &&
                    <div className="wrapper-text">
                      <p>{ReactHtmlParser(row.Text)}</p>
                    </div>}
                    </React.Fragment>
                )}
              </div>   
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WorkSingle;
