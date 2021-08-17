import React from "react";
import "./product.css";

const Product = ({ product }) => {
	return (
		<div className="product">
			<div className="product-image">
				<img src={product.image} alt="imagen del producto" />
			</div>
			<div className="product-content">
				<div className="product-content__header">
					<span className="product-title">{product.title}</span>
					<span className="product-price">${product.price}</span>
				</div>

				<p className="product-category">{product.category}</p>

				<p>{product.description}</p>
			</div>
		</div>
	);
};
export default Product;
