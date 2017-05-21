import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
//import { addTodo } from '../actions';

const Welcome = ({ dispatch }) => {
  let input;

  return (
    <div className="container">
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills pull-right">
            <li role="presentation" class="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">About</a></li>
            <li role="presentation"><a href="#">Contact</a></li>
          </ul>
        </nav>
        <h2 className="text-muted">Users Perceived</h2>
      </div>

      <div className="jumbotron">
        <h1>Jumbotron heading</h1>
        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
      </div>
    </div>
  );
};

Welcome.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Welcome);
