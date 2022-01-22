import { useEffect, useState } from "react";
import { getDataCharacters } from "../services/getDataCharacters";

export const useFetchCharacters = (value) => {
	const [chars, setChars] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getDataCharacters(value).then((data) =>
			setChars({
				data: data,
				loading: false,
			})
		);
	}, [value]);

	return chars;
};