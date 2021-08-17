import React from "react";
import "./header.css";

const Header = ({ setIsFormActive, isFormActive }) => {
	return (
		<div className="header">
			<h1>Catalogo de productos</h1>
			<button onClick={() => setIsFormActive(!isFormActive)}>
				Agregar producto
			</button>
		</div>
	);
};
export default Header;
