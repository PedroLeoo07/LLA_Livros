import "../styles/globals.css";
			export const metadata = {
				title: "Livraria",
				description: "Livraria",
        keywords: "Livraria",
        author: "Leonardo Oliveira, Lucas Zani, André Lucca",
			};
			export default function RootLayout({ children }) {
				return (
					<html>
						<body>{children}</body>
					</html>
);
		}