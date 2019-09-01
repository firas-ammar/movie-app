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
    }
  }

  changeRatingHandler = (rating)=>{
    this.setState({
      value : rating
    })
  }

  //Handler to send to search component 
    titleFilter = (event)=>{
      //event tab3a l'evenement declanchee ya3ni l valeur chikoun li hattitou fi input
      //ijibou mel compnent search khater l fonction hethi t3addet ka props(reference)
      // l search component
      let strToSearch = event.target.value;
      // chibaddal estate titre bel valeur li jebha jdida
      // w meme lvaleur mta
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
     
     <Moviecard x={tablist.filter( el=> 
                                        el.rating >= this.state.value && 
                el.titre.toLowerCase().includes(this.state.titre.toLowerCase()))} />
    </div>
  </div>)
}
}


export default App;
