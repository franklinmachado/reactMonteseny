import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
	return (
		<header className="main__header">
			<div className="header__logo__container">
				<img
					className="header__logo__img"
					src="src/assets/logoColorida.svg"
					alt=""
				/>
			</div>
			<div className="header__container">
				<div className="header__wrapper">
					<nav>
						<ul className="main-navigation">
              <Link to="/">Home</Link>
              <Link to="/sobre">Sobre</Link>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
