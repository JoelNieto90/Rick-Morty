import CardEpisodes from "../components/CardEpisodes";
import { Row, Col, Input, Spin } from "antd";
import letters from "../assets/episodes.png";
import "../styles/Episodes.scss";
import { useFetchEpisodes } from "../hooks/useFetchEpisodes";
import { useState } from "react/cjs/react.development";
const { Search } = Input;

const Episodes = () => {
	const [search, setSearch] = useState("");
	const { data, loading } = useFetchEpisodes(search);

	const onSearch = (value) => {
		if (value === "" || value === null) {
			setSearch('');
			return data;
		} else {
			setSearch(value);
			return data;
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
				<p>Loading</p>
				{loading && <Spin size='large' />}
				<CardEpisodes data={data} />
			</Col>
		</Row>
	);
};

export default Episodes;
