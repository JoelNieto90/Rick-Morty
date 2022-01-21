import { useEffect, useState } from "react";
import { getDataCharacters } from "../services/getDataCharacters";

export const useFetchCharacters = () => {
	const [chars, setChars] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getDataCharacters().then((data) =>
			setChars({
				data: data,
				loading: false,
			})
		);
	}, []);

	return chars;
};
