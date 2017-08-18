import React from 'react'
import { NavLink } from 'react-router-dom';

//NOTE: uses NavLink to get active button feature based on url
const Button = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="well">
          <div className="row">
            <div className="col-sm-12">
              <div className="btn-group btn-group-justified">
                <NavLink to="/" className="btn btn-default">
                  <span className="glyphicon glyphicon-list"></span>
                  See All
                </NavLink>
                <NavLink to="/random" className="btn btn-primary">
                  <span className="glyphicon glyphicon-random"></span>
                  Random
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Button
