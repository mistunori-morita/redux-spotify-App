import React, { Component } from 'react'
import './index.css'
import 'materialize-css/dist/css/materialize.min.css'

class Index extends Component{
  constructor(){
    super();
    this.state ={
      song: ''
    }
  }
  render(){
    return(
      <div className="Index">
        <div className="card">
          <div className="card-content">
            <div className="Index-serachBox">
              <input type="text" 
              className="Index-serachBox-input"
              placeholder="Search"
              onChange={(e)=>{ this.setState({ song: e.target.value})}}
              value={this.state.song}
              />
              <a href="" className="waves-effect waves-light btn green">
              <i className="fa fa-search"></i>
              </a>
            </div>
            <div>
              {/* todo*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index;