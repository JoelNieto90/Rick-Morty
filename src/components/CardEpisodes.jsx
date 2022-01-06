import React from 'react';
import { Row, Col } from "antd";
import CardIndividual from "./CardIndividual";
import "../styles/CardEpisodes.scss";

function CardEpisodes({ data }) {
  return (
		<div className='CardEpisodes'>
			<Row gutter={16}>
				{data.map((epi) => (
					<Col
						xs={12}
						sm={12}
						md={8}
						lg={8}
						xl={8}
						className='CardEpisodes_Col'
						key={epi.id}
					>
						<CardIndividual epis={epi} type='1' />
					</Col>
				))}
			</Row>
		</div>
	);
}

export default CardEpisodes;