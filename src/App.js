import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
  constructor() {
    super(); // Calls to React.Component's constructor (each component is a class)

    this.state = {
      monsters: [],
      searchField: '' 
    }

    //this.handleChange = this.handleChange.bind(this);  // Must when non using error functions
  }


  // When React starting display the component
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        //console.log(response);
        response.json()
        .then(users => {
          //console.log(users);
          this.setState( 
            {monsters: users}, 
            () => {
              this.addGoodMonsters(this.state.monsters);
              console.log(this.state.monsters);
              this.setState({monsters: this.state.monsters});
            } 
          ); 
        })
      });   
  }


  addGoodMonsters(monsters) {
    const BREANDAN_EICH = {email: "breneich@monster.com", id: 'brendan-eich', name: 'Brendan Eich'};
    const DAVID_LEV = {email: "davidlev@monster.com", id: 'david-lev', name: 'David Lev'};
    const AMITAY_LEVI = {email: "amitaylevi@monster.com", id: 'amitay-levi', name: 'Amitay Levi'};
    const ROYI_BERNTHAL = {email: "royibernthal@monster.com", id: 'royi-bernthal', name: 'Royi Bernthal'};

    monsters.unshift(ROYI_BERNTHAL, AMITAY_LEVI, DAVID_LEV, BREANDAN_EICH);
  }


  handleChange = (e) => {
    this.setState(
      {searchField: e.target.value}, 
      //() => console.log(this.state)
    ); 
  }


  onSearchChange = event => {
    this.setState({ searchField: event.target.value})
  }


  render() {
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    //console.log(filteredMonsters);

    return (
      <div className="App">

        <p className='app-header'> Developing Monsters </p>

        {/* <SearchBox  onSearchChange={this.onSearchChange}/> */}

        <SearchBox 
          placeholder='search monsters' 
          handleChange = {this.handleChange} 
        />

        <CardList monsters={filteredMonsters} /> 
      </div>
    );
  }
}


export default App;
