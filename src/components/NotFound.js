import React from 'react';
import ReactDOM from 'react-dom';
import { Link} from 'react-router-dom';
const NotFound = (props) => {
    return (
    <div className="dashColor2">
    <b>Halt 404</b> the not found 404 page.<Link to="/" className="dashColor3">Link to a real page</Link>
    </div>
);
};
export default NotFound;   