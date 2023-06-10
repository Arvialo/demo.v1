import { useEffect } from "react";
import useGlobalState from "./useGlobalState";

export default function useLocalStorage(key, defaultValue) {
	const [data, setData] = useGlobalState(key, "init");

	useEffect(() => {
		let localData = localStorage.getItem(key);

		if (!localData) {
			setData(defaultValue);
			localStorage.setItem(key, defaultValue);
		} else {
			setData(localData);
		}
	}, []);

	useEffect(() => {
		if (data === "init") return;

		localStorage.setItem(key, data);
	}, [data]);

	console.log(data);

	return [data, setData];
}
