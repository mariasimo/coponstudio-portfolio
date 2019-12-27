import React from 'react';
import { Link } from 'react-router-dom';

export default class WorkItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
  }

  toggleInfo = () => {
    const { showInfo } = this.state;
    this.setState({ ...this.state, showInfo: !showInfo });
  };

  hideInfo = () => {
    this.setState({ ...this.state, showInfo: false });
  };

  render() {
    const { work } = this.props;
    const { showInfo } = this.state;

    return (
      <article className='work-item'>
        <Link to={`/works/${work.id}`}>
          <div
            className='wrapper'
            onMouseOver={this.toggleInfo}
            onMouseLeave={this.hideInfo}
          >
            <div className='overlay' style={{ opacity: showInfo ? '1' : '0' }}>
              {work.Title}
            </div>
            <img
              src={`http://localhost:1337${work.featureImage.url}`}
              alt={work.Title}
            />
          </div>
        </Link>
      </article>
    );
  }
}
