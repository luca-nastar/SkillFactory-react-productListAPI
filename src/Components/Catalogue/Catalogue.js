import React, { useEffect, useState } from "react";
import { getProductsApi } from "../../API/productsApi";
import AddProduct from "../AddProduct";
import Header from "../Header";
import Product from "../Product";
import "./catalogue.css";

const Catalogue = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isFormActive, setIsFormActive] = useState(false);

	useEffect(() => {
		getProductsApi().then((resp) => {
			setIsLoading(false);
			return setProducts(resp);
		});
	}, []);

	return (
		<>
			<Header setIsFormActive={setIsFormActive} isFormActive={isFormActive} />

			{isFormActive && (
				<AddProduct
					products={products}
					setProducts={setProducts}
					setIsFormActive={setIsFormActive}
				/>
			)}

			<div className="catalogue">
				{isLoading
					? "Cargando..."
					: products.map((product) => (
							<Product key={product.id} product={product} />
					  ))}
			</div>
		</>
	);
};
export default Catalogue;
