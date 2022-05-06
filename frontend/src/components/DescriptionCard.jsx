import React, { useContext } from "react";

import ExportContext from "../contexts/PanierContext";
import ProgressBar from "./ProgressBar";
import teamRocketball from "../assets/team-rocket ball.png";

import "../styles/PokemonDescription.css";

function DescriptionCard({ detail, pokedexnum, ajouterAuPanier }) {
  const { monPanier } = useContext(ExportContext.PanierContext);
  return (
    <div className="pkm-data">
      <div className="main-data">
        <h1>{detail.name}</h1>
        <div className="main-data-detail">
          <p>
            ID :<br /> #{detail.id}{" "}
          </p>
          <p>
            Weight :<br />
            {detail.weight / 10} kgs
          </p>
          <p>
            height :<br />
            {detail.height / 10} m
          </p>
          <div className="type-flex">
            <h3>{detail.types?.length > 1 ? "types:" : "type:"}</h3>
            <div className="pokemon-type">
              {detail.types &&
                detail.types.map((types) => <p>{types.type.name}</p>)}
            </div>
          </div>
        </div>
      </div>

      <div className="box-pkm-picture-basic-stats">
        <img
          className="pkm-picture"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${detail.id}.png`}
          alt={`Official ${detail.name} artwork`}
        />

        <div className="pkm-basic-stats">
          {detail.stats &&
            detail.stats.map((el) => (
              <ul className="stats-name">
                {el.stat.name}
                <li className="stats-value">
                  <ProgressBar progress={el.base_stat} />
                </li>
              </ul>
            ))}
        </div>
      </div>
      <div className="btn-ajouter-au-panier">
        <img
          className="rocketball-descriptioncard"
          src={teamRocketball}
          alt="rocketball"
        />
        {monPanier && monPanier.length === 6 ? (
          <button type="button">
            Votre Panier est Déja plein
            <br /> retirer en un avant de pouvoir en rajouter de nouveaux
          </button>
        ) : (
          <button type="button" onClick={() => ajouterAuPanier(pokedexnum - 1)}>
            Attrape ce Pokémon
            <br />
            et ajoute le au panier
          </button>
        )}
      </div>

      <ul className="abilities">
        <h2>Capacités spéciales :</h2>
        {detail.abilities &&
          detail.abilities.map((el) => (
            <li className="abilities-name">{el.ability.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default DescriptionCard;
