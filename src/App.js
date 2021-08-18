import { Component } from 'react';
import './App.css';
import CustomImage from './components/custom-image';
import CustomInput from './components/custom-input';
import Country from './test-data/country';
import Sport from './test-data/sport';
import Player from './test-data/player';
import CustomButtom from './components/custom-button';

const layoutStyle = {
  marginTop: 100,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
};

const layoutBody = {
  flexDirection: "column"
};
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataCountry: null,
      dataPlayer: null,
      dataSport: null,
      countryCode: 0,
      sportCode: 0,
      uriImage: null,
    };

    this.searchSport = this.searchSport.bind(this);
    this.searchPlayer = this.searchPlayer.bind(this);
    this.selectUri = this.selectUri.bind(this);

  }

  componentDidMount() {
   this.setState({dataCountry: Country})
  }

  searchSport({target}) {
   const { value } = target;
   const country = value ? Country[value] : 0;
   const dataSport = (country) ? Sport : null;
   this.setState({dataSport, countryCode: country.country_code});
  }

  searchPlayer({target}) {
    const { value } = target;
    const sport = value ? Sport[value] : 0;
    const dataPlayer = (this.state.sportCode && sport) ? Player.filter((player) => (player.country_code === this.state.countryCode) && (player.sport_code === sport.sport_code) ) : null

    this.setState({dataPlayer, sportCode: sport.sport_code});
  }

  selectUri({target}) {
    const { value } = target;
    const player = value ? Player[value] : 0;
    const uriImage = player ? player.url_image : null;

    this.setState({uriImage});
  }

  downloadImage() {
    if (this.state.uriImage) {
      //logic for download
    }
  }

  render() {

    return (
      <div style={layoutBody} className="App">
        <div style={layoutStyle}>
          <CustomInput name="Pais" data={this.state.dataCountry} onChange={this.searchSport}></CustomInput>
          <CustomInput name="Equipo" data={this.state.dataSport} onChange={this.searchPlayer}></CustomInput>
          <CustomInput name="Jugador" data={this.state.dataPlayer} onChange={this.selectUri}></CustomInput>
        </div>
        <div>
          <CustomImage uri={this.state.uriImage}></CustomImage>
        </div>
        <div>
          <CustomButtom onClick={this.downloadImage} text={"Descargar"}></CustomButtom>
        </div>
      
      </div>
    );
  }
 
}



export default App;
