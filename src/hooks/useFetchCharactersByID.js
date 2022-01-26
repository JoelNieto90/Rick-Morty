import { useEffect, useState, useRef } from "react";
import { getDataCharactersByID } from "../services/getDataCharacters";

export const useFetchCharactersByID = (value) => {
  const isMounted = useRef(true);

	const [chars, setChars] = useState({
		data: [],
		loading: true,
  });
  
  useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

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
