import { useEffect, useState } from "react"
import "./App.css"

function App() {
	const [navBackgroundColor, setNavBackgroundColor] = useState("#0f0f0f")

	useEffect(() => {
		const handleScroll = () => {
			const divs = document.querySelectorAll(".content-div")
			const navbar = document.querySelector("nav")

			for (let i = 0; i < divs.length; i++) {
				const div = divs[i]
				const rect = div.getBoundingClientRect()
				const navbarBottom = navbar.getBoundingClientRect().bottom

				if (rect.top <= navbarBottom && rect.bottom >= navbarBottom) {
					const backgroundColor = window.getComputedStyle(div).backgroundColor
					setNavBackgroundColor(backgroundColor)
					break
				}
			}
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<div className="App">
			<nav style={{ backgroundColor: navBackgroundColor }}>Navbar</nav>

			<div className="content-div" style={{ height: "80vh" }}>
				Content 1
			</div>
			<div className="content-div" style={{ height: "50vh" }}>
				Content 2
			</div>
			<div className="content-div" style={{ height: "60vh" }}>
				Content 3
			</div>
			<div className="content-div" style={{ height: "40vh" }}>
				Content 4
			</div>
			<div className="content-div" style={{ height: "100vh" }}>
				Content 5
			</div>
		</div>
	)
}

export default App
