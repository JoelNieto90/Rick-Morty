import { useEffect, useState, useRef } from "react";
import { getDataCharacters } from "../services/getDataCharacters";

export const useFetchCharacters = (value) => {
  const isMounted = useRef(true);

	const [chars, setChars] = useState({
		data: [],
		loading: true,
  });
  
  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

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
