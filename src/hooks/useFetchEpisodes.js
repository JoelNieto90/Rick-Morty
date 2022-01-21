import { useEffect, useState } from "react";
import { getDataEpisodes } from "../services/getDataEpisodes";

export const useFetchEpisodes = (value) => {
	const [epis, setEpis] = useState({
		data: [],
		loading: true,
	});
	useEffect(() => {
		getDataEpisodes(value).then((data) =>
			setEpis({
				data: data,
				loading: false,
			})
		);
	}, [value]);
	return epis;
};
