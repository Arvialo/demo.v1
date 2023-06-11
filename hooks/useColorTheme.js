import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useColorTheme() {
	const [theme, setTheme] = useLocalStorage("theme", "light");
	const [systemLight, setSystemLight] = useState(true);

	useEffect(() => {
		if (
			theme === "dark" ||
			(theme === "system" &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setSystemLight(false);
			document.body.classList.remove("light_theme-body");
			document.documentElement.classList.remove("light_theme-html");
		} else {
			setSystemLight(true);
			document.body.classList.add("light_theme-body");
			document.documentElement.classList.add("light_theme-html");
		}
	}, [theme]);

	return {
		theme: theme,
		setTheme,
		isLight: theme === "light" || systemLight,
	};
}
