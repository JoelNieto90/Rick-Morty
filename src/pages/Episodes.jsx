import { React, useEffect, useState } from "react";
import { getDataEpisodes } from "../services/getDataEpisodes";
import { getDataEpisodesByName } from "../services/getDataEpisodes";
import CardEpisodes from "../components/CardEpisodes";
import { Row, Col, Input } from "antd";
import letters from "../assets/episodes.png";
import "../styles/Episodes.scss";
const { Search } = Input;

const Episodes = () => {
	const [epis, setEpis] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getDataEpisodes().then((data) => {
			setEpis(data);
		});
		setLoading(false);
	}, []);

	const onSearch = (value) => {
		if (value === "" || value === null) {
			getDataEpisodes().then((data) => {
				setEpis(data);
			});
		} else {
			getDataEpisodesByName(value).then((data) => {
				setEpis(data);
			});
		}
	};

	return (
		<Row>
			<Col span={24} className='Episodes'>
				<img className='Episodes_Img' src={letters} alt='letters' />
				<Search
					placeholder='Search for Episodes'
					loading={loading}
					onSearch={onSearch}
					style={{ width: "55%", marginBottom: "50px" }}
					enterButton
				/>
				<CardEpisodes data={epis} />
			</Col>
		</Row>
	);
};

export default Episodes;
