import { Row, Col, Spin } from "antd";
import ModalCharacter from "../components/ModalCharacter";
import { useFetchCharactersByID } from "../hooks/useFetchCharactersByID";

const CharactersEpisodes = ({ value }) => {
  const { data, loading } = useFetchCharactersByID(value);

	return (
		<Row gutter={24}>
			<Col span={24}>
				{loading && <Spin size='large' />}
				{!loading && (
					<>
						<p
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							{data.name}
						</p>
						<ModalCharacter data={data} />
					</>
				)}
			</Col>
		</Row>
	);
};

CharactersEpisodes.defaultProps = {
	value: "https://rickandmortyapi.com/api/character",
};

export default CharactersEpisodes;
