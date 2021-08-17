import React, { useState, memo } from "react";
import { addProductApi } from "../../API/productsApi";
import uniqid from "uniqid";
import "./add-product.css";

const AddProduct = memo(({ products, setProducts, setIsFormActive }) => {
	const [newProduct, setNewProduct] = useState({
		image: "./Assets/noImage.png",
		id: uniqid(),
	});

	const handleOnSubmit = (e) => {
		e.preventDefault();

		setNewProduct({ ...newProduct, id: uniqid() });

		addProductApi(newProduct).then((resp) =>
			setProducts([newProduct, ...products])
		);
		setIsFormActive(false);
	};

	return (
		<div>
			<div className="form">
				<h2>Agregar nuevo producto</h2>
				<form onSubmit={handleOnSubmit}>
					<input
						type="text"
						onChange={(e) =>
							setNewProduct({ ...newProduct, title: e.target.value })
						}
						placeholder="Nombre del producto"
						required
					/>
					<input
						onChange={(e) =>
							setNewProduct({ ...newProduct, price: e.target.value })
						}
						type="number"
						placeholder="Precio del producto"
						required
					/>
					<input
						onChange={(e) =>
							setNewProduct({ ...newProduct, category: e.target.value })
						}
						type="text"
						placeholder="Categoria del producto"
						required
					/>
					<input
						onChange={(e) =>
							setNewProduct({ ...newProduct, description: e.target.value })
						}
						type="text"
						placeholder="Descripcion del producto"
						required
					/>

					<button type="submit">Agregar</button>
				</form>
			</div>
		</div>
	);
});
export default AddProduct;
