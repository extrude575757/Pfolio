import React from 'react';
import ReactDOM from 'react-dom'; 

const PortfolioItem = (props) => {
    console.log(props);
   return  (
        <div className="dashColor3">
        This is info from Portfolio Page #{props.match.params.id}
        </div>
    );
};
export default PortfolioItem;