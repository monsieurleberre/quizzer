import React from 'react';
import {Link} from 'react-router';
import '../styles/about-page.css';
import {Card, CardTitle, CardText} from 'material-ui/Card';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <Card>
        <CardTitle title="About" subtitle="what is this website about ?" />

        <CardText>
          <Link to="/badlink">Click this bad link</Link> to see the 404 page.
        </CardText>
      </Card>
    </div>
  );
};

export default AboutPage;
