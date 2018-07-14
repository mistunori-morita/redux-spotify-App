import React, { Component } from 'react'
import './index.css'
import 'materialize-css/dist/css/materialize.min.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SongItem from './SongItem'
import {checkSignIn, search} from '../../actions'

class Index extends Component{
  constructor(){
    super();
    this.state ={
      song: ''
    }
  }

  componentWillMount() {
    this.props.checkSignIn();
  }
  render(){
    const {song} = this.state;
    // console.log(this.props)
    return(
      <div className="Index">
        <div className="card">
          <div className="card-content">
            <div className="Index-serachBox">
              <input type="text" 
              className="Index-serachBox-input"
              placeholder="Search"
              onChange={(e)=>{ this.setState({ song: e.target.value})}}
              value={song}
              />
              <div className="waves-effect waves-light btn green"
              onClick={(e) => this.props.search(song)}>
                <i className="fa fa-search"></i>
              </div>
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
    checkSignIn,
    search
  }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Index);