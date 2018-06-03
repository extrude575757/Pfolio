import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
const Portfolio = (props) => {
    return (
    <div className="dashColor3">
     Portfolio Page: See what I have worked on
    <p className="dashcolor4"><Link to="portfolio/1">Project_1</Link>
    <Link to="portfolio/2" >Project_2</Link>
    </p>
    </div>
);
};
export default Portfolio;