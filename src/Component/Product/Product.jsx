import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = (props) => {
	return (
		<>
			<div className="">
				<div className="max-w-3xl mx-auto">
					<h2 className="sr-only">Products</h2>
					<h2 className="uppercase text-center font-bold py-6 text-2xl">
						Our Products
					</h2>

					<div className="grid grid-cols-2 gap-5">
						{props.products.map((product, i) => (
							<Link key={i} to={`/${product.id}`}>
								<div className="rounded w-full text-white bg-primary overflow-hidden shadow-lg">
									<img
										className="w-full object-cover "
										src={product.imageSrc}
										alt={product.imageAlt}
									/>
									<div className="px-6 py-4">
										<div className=" md:text-xl mb-2">
											<p className="font-bold">{product.name}</p>
											<p>{product.litter}</p>
										</div>
										<div className="font-bold md:text-xl mb-2">
											&#8358;{product.price}
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
				<Outlet />
			</div>
		</>
	);
};

export default Product;
