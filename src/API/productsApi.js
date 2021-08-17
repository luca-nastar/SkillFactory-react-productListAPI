import axios from "axios";

export const getProductsApi = () => {
	return axios
		.get("https://fakestoreapi.com/products")
		.then((response) => response.data)
		.catch((error) => error);
};

export const addProductApi = (data) => {
	return axios
		.post("https://fakestoreapi.com/products", data)
		.then((response) => response.data)
		.catch((error) => error);
};
