import "../app/globals.css";
			export const metadata = {
				title: "Livraria",
			};
			export default function RootLayout({ children }) {
				return (
					<html>
						<body>{children}</body>
					</html>
);
		}