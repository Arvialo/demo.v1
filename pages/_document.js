import { Html, Head, Main, NextScript } from "next/document";
// import useColorTheme from "@/hooks/useColorTheme";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect } from "react";

export default function Document() {
	const [theme, setTheme] = useLocalStorage("theme", "dark");

	return (
		<Html lang="en" className="light_theme-html">
			<Head />
			<body className="light_theme-body">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
