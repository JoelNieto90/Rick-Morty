import React from "react";
import { Card } from "antd";
import CharactersEpisodes from "./CharactersEpisodes";

const CardIndividual = ({ epis }) => {
	return (
		<Card cover={<img alt='Card' src={epis.img} />}>
			<section className='CardEpisodes_Col--Card'>
				<div className='Card_Text'>
					<span>{epis.name}</span>
					<span>{epis.air_date}</span>
				</div>
				<div>
					{epis.charactersUrl.map((url) => (
						<CharactersEpisodes value={url} key={url} />
					))}
				</div>
			</section>
		</Card>
	);
};

export default CardIndividual;
