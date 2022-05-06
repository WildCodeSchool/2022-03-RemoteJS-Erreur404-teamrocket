import axios from "axios";
import React, { useEffect, useState } from "react";

import PokemonCard from "../components/PokemonCard";
import Searchbar from "../components/Searchbar";
import Séparateur from "../components/Séparateur";

import pokedexImg from "../assets/pokedex.png";

import "../styles/Pokedex.css";
import ListEncounterAreaByPokemon from "../data/ListEncouterAreaByPokemon";

function Pokedex() {
  const [searchValue, setSearchValue] = useState("");
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
      .then((res) =>
        setPokedex(
          res.data.results.map((pokemon, index) => ({
            ...pokemon,
            pokedexnum: index + 1,
            area: ListEncounterAreaByPokemon[index],
          }))
        )
      );
  }, []);
  return (
    <div>
      <section className="box-pokedex">
        <div className="pokedex-text">
          <h1>Créer le plus féroce des Pokedex</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur pedit adipisicing elit.
            Blanditiis illo quos impedit voluptatibus saepe natus doloribus.
          </p>
        </div>
        <div className="pokedex-img">
          <img src={pokedexImg} alt="pokedex" />
        </div>
      </section>
      <Séparateur />
      <section className="searchbar">
        <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
      </section>
      <div className="Pokedex-wrapper">
        <ul>
          {pokedex &&
            pokedex
              .filter((pokemon) => pokemon.name.includes(searchValue))
              .map((pokemon) => (
                <PokemonCard key={pokemon.pokedexnum} pokemon={pokemon} />
              ))}
        </ul>
      </div>
    </div>
  );
}

export default Pokedex;
