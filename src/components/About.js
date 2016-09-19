import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import '../styles/about-page.css';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Since this component is simple and static, there's no parent container for it.
const About = ({loadImages}) => {
  return (
    <div>
      <Card>
        <CardTitle title="About" subtitle="what is this website about ?" />

        <CardText>
          <Link to="/badlink">Click this bad link</Link> to see the 404 page.
        </CardText>
        <FlatButton onClick={loadImages} label="load images"/>
      </Card>
    </div>
  );
};
About.propTypes = {
  loadImages: PropTypes.function.isRequired,
};
export default About;
