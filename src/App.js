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
    this.downloadImage = this.downloadImage.bind(this);

  }

  componentDidMount() {
   this.setState({dataCountry: Country})
  }

  searchSport({target}) {
   this.setState({dataSport: null,dataPlayer: null, uriImage: null,countryCode: 0 , sportCode: 0});
   const { value } = target;
   const country = value ? Country[value] : null;
   const dataSport = (country) ? Sport : null;
   this.setState({dataSport, countryCode: country?.country_code});
  }

  searchPlayer({target}) {
    this.setState({uriImage: null});
    const { value } = target;
    const sport = value ? Sport[value] : null;
    const dataPlayer = (this.state.sportCode && sport) ? Player.filter((player) => (player.country_code === this.state.countryCode) && (player.sport_code === sport.sport_code) ) : null
    this.setState({dataPlayer, sportCode: sport?.sport_code});
  }

  selectUri({target}) {
    const { value } = target;
    const player = value ? this.state.dataPlayer[value] : 0;
    const uriImage = player ? player.url_image : null;
    this.setState({uriImage});
  }

  async downloadImage() {
    if (this.state.uriImage) {

      const image = await fetch(this.state.uriImage)
      const imageBlog = await image.blob()
      const imageURL = URL.createObjectURL(imageBlog)
      
      const link = document.createElement('a')
      link.href = imageURL
      link.download = 'image'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
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
