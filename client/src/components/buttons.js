import React from 'react'
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="well">
          <div className="row">
            <div className="col-sm-12">
              <div className="btn-group btn-group-justified">
                <Link to="/" className="btn btn-default">
                  <span className="glyphicon glyphicon-list"></span>
                  See All
                </Link>
                <Link to="/random" className="btn btn-primary">
                  <span className="glyphicon glyphicon-random"></span>
                  Random
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Button
