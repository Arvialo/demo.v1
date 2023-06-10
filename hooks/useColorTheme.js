import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useColorTheme() {
	const [theme, setTheme] = useLocalStorage("theme", "dark");

	useEffect(() => {
		if (
			theme === "dark" ||
			(theme === "system" &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	return {
		theme: theme,
		setTheme,
		isDark: theme !== "light",
	};
}
