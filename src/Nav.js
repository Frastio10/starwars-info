import React from 'react';
import {Link} from 'react-router-dom';

function Nav () {



	return  (
		<nav>
			<div className="container">
				<Link to="/">
					<h3>Logo</h3>
				</Link>
				<ul className="nav-links">
					<Link to="/people">
						<li>People</li>
					</Link>
					<Link to="/films">
						<li>Films</li>
					</Link>
					<Link to="/starships">
						<li>Starships</li>
					</Link>
					<Link to="/vehicles">
						<li>Vehicles</li>
					</Link>
					<Link to="/species">
						<li>Species</li>
					</Link>
					<Link to="/planets">
						<li>Planets</li>
					</Link>
				</ul>
			</div>
		</nav>
	)
}

export default Nav;
