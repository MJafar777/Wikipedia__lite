import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const changeTerm = (e) => {
    setTerm(e.target.value);
  };
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });
      setResults(data.data.query.search);
    };
    const timer = setTimeout(() => {
      if (term) {
        getData();
      } else if (!term && results.length) {
        setResults([]);
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [term]);

  const renderResults = () => {
    return results.map((val) => {
      return (
        <div className="ui message" key={val.pageid}>
          <div className="header">{val.title}</div>
          <p dangerouslySetInnerHTML={{ __html: val.snippet }}></p>{" "}
          {/*extiyotbo'lish kerak*/}
          <a
            href={`http://en.wikipedia.org/wiki?curid=${val.pageid}`}
            style={{
              backgroundColor: "green",
              padding: "5px 10px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Go Page
          </a>
        </div>
      );
    });
  };

  return (
    <div
      className={"ui container"}
      style={{ width: "1000rem", margin: "3rem auto" }}
    >
      <div className="ui search container">
        <h1
          style={{ fontSize: "50px", margin: "3rem auto", textAlign: "center" }}
        >
          Wikipedia Search
        </h1>
        <div className="ui icon input container">
          <input
            style={{ marginBottom: "3rem" }}
            onChange={changeTerm}
            className="prompt"
            type="text"
            placeholder="Common passwords..."
          />
        </div>
        <div>{renderResults()}</div>
      </div>
    </div>
  );
};

export default Search;
