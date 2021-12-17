import React from 'react';
import { Card } from "antd";
import CharactersEpisodes from "./CharactersEpisodes";

const CardIndividual = ({epis, type}) => {
  return (
    <Card cover={<img alt="Card" src={epis.img} />}>
      <section className="CardEpisodes_Col--Card">
        <div className="Card_Text">
          <span>{epis.name}</span>
          <span>{epis.air_date}</span>
        </div>
        {type === "1" ? (
          <div>
            {epis.charactersUrl.map((charsUrl) => (
              <>
                <CharactersEpisodes urlCharacter={charsUrl} />
              </>
            ))}
          </div>
        ) : ""}
      </section>
    </Card>
  );
}

export default CardIndividual;