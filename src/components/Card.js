import React from "react";
import Name from "./Name";
import Bio from "./Bio";
import Species from "./Species";
import Homeworld from "./Homeworld";

class Card extends React.Component {
  state = {
    character: {},
    species: "",
    homeworld: "",
    charLoading: true,
    speciesLoading: true,
    homeworldLoading: true
  };
  componentDidMount(props) {
    fetch(`https://swapi.co/api/people/${this.props.num}/`)
      .then(results => {
        // console.log(results);
        return results.json();
      })
      .then(data => {
        this.setState({
          character: data,
          charLoading: false,
          speciesLoading: true,
          homeworldLoading: true
        });
        fetch(this.state.character.species)
          .then(results => {
            return results.json();
          })
          .then(data => {
            // console.log(data);
            let oldCharacter = this.state.character;
            // console.log(oldCharacter);
            this.setState({
              character: oldCharacter,
              species: data.name,
              charLoading: false,
              speciesLoading: false,
              homeworldLoading: true
            });
            fetch(this.state.character.homeworld)
              .then(results => {
                return results.json();
              })
              .then(data => {
                // console.log(data);
                let oldCharacter = this.state.character;
                let oldSpecies = this.state.species;
                // console.log(oldCharacter);
                this.setState({
                  character: oldCharacter,
                  species: oldSpecies,
                  homeworld: data.name,
                  charLoading: false,
                  speciesLoading: false,
                  homeworldLoading: false
                });
              });
          });
      });
  }
  render() {
    return (
      <div className="card">
        <Name
          loading={this.state.charLoading}
          name={this.state.character.name}
        />
        <Bio
          loading={this.state.charLoading}
          info1="Height: "
          value1={this.state.character.height}
          info2="Weight: "
          value2={this.state.character.mass}
          info3="Birth Year: "
          value3={this.state.character.birth_year}
        />
        <Bio
          loading={this.state.charLoading}
          info1="Hair Colour: "
          value1={this.state.character.hair_color}
          info2="Eye Colour: "
          value2={this.state.character.eye_color}
          info3="Skin Colour: "
          value3={this.state.character.skin_color}
        />
        <Species
          loading={this.state.speciesLoading}
          species={this.state.species}
        />
        <Homeworld
          loading={this.state.homeworldLoading}
          homeworld={this.state.homeworld}
        />

        {/* <Films /> */}
      </div>
    );
  }
}

export default Card;
