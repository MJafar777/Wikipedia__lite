import React from "react";
import axios from "axios";
import SearchBar from "../component3/SearchBar";
import ImageList from "../component3/ImageList";



class Weather extends React.Component {
  state = { imageArr: [], search: "", page: 1 };

  SearchdanMalumotniOl = async (imgdata, pg = 1) => {
    if (pg) {
      this.setState({ page: pg });
      this.setState({ search: imgdata });
    }
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: imgdata,
        page: pg,
        per_page: 20,
      },
      headers: {
        Authorization: "Client-ID fFxqUKuJS8hx3nwzRQoYiHB5URcqFjkGG-FSsZUDOb4",
      },
    });
    this.setState({ imageArr: data.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar malumotniOl={this.SearchdanMalumotniOl} />
        <ImageList getData={this.state.imageArr} />
      </div>
    );
  }
}

export default Weather;
