import "../app/globals.css";
			export const metadata = {
				title: "My First NextJS App",
			};
			export default function RootLayout({ children }) {
				return (
					<html>
						<body>{children}</body>
					</html>
);
		}
