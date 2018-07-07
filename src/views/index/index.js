import React, { Component } from 'react'
import './index.css'
import 'materialize-css/dist/css/materialize.min.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SongItem from './SongItem'


class Index extends Component{
  constructor(){
    super();
    this.state ={
      song: ''
    }
  }
  render(){
    console.log(this.props)
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
          </div>
        </div>
        <div className="card INdex-results-card">
          <div className="card-content">
          
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    routes: state.routes
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({

  }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Index);