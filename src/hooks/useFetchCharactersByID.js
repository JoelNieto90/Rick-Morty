import { useEffect, useState } from "react";
import { getDataCharactersByID } from "../services/getDataCharacters";

export const useFetchCharactersByID = (value) => {
	const [chars, setChars] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getDataCharactersByID(value).then((data) =>
			setChars({
				data: data,
				loading: false,
			})
		);
	}, [value]);

	return chars;
};
