import React, { Component } from 'react';
import './App.css';
import SearchPage from './search';
import Star from './star';
import Moviecard from './listmovie';


import wick from './wick.jpg';
import ninja from './ninja.jpg';
import menblack from './menblack.jpg';

const tablist=[{id:'jhone', image:wick, titre:'John Wick: Chapter 3',rating:'4' },
{id:'ninja', image:ninja, titre:'Ninja Assassin',rating:'5' },
{id:'menblack', image:menblack, titre:'Men in Black', rating:'3' }]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x:tablist,
      value:1,
      titre:'',
      isLoading: true,
    }
  }
  componentDidMount(){
    setTimeout(()=>this.setState({isLoading: false}), 3000)
      }

  changeRatingHandler = (rating)=>{
    this.setState({
      value : rating
    })
  }

    titleFilter = (event)=>{
      let strToSearch = event.target.value;
      this.setState({
        titre : strToSearch.toLowerCase()
      })
  }
  render() {

    return (
    <div className="App">
       <div className="container">
       <div className="container" style={{display: 'flex', justifyContent: 'center'}} >
     <SearchPage searchStr={this.state.titre} searchHandler= {this.titleFilter}/>
     <Star RatingHandler={this.changeRatingHandler}/>
     </div>
     
     <Moviecard loading={this.state.isLoading} x={tablist.filter( el=> 
                                        el.rating >= this.state.value && 
                el.titre.toLowerCase().includes(this.state.titre.toLowerCase()))} />
    </div>
  </div>)
}
}


export default App;
