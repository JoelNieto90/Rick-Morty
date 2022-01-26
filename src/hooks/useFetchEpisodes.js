import { useEffect, useState, useRef } from "react";
import { getDataEpisodes } from "../services/getDataEpisodes";

export const useFetchEpisodes = (value) => {
  const isMounted = useRef(true);
  
	const [epis, setEpis] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

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
