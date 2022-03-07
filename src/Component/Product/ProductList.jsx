import { ShoppingCartIcon } from "@heroicons/react/outline";
import React from "react";

const ProductList = (props) => {
	console.log("props.product ", props.product);
	return (
		<>
			<div className="max-w-3xl mx-auto   border-y-2 border-gray-200 flex mt-8">
				<div className="flex   justify-around items-center my-6 w-full  ">
					<ul className="flex">
						<li className="mx-2">
							<img
								src={props.product.imageSrc}
								className="object-cover"
								alt="product"
							/>
						</li>
						<li>
							<p className="text-base font-semibold"> {props.product.name}</p>
							<p className="text-center "> {props.product.litter}</p>
						</li>
					</ul>

					<div className=" mx-2 self-end   text-black">
						<ul className="flex">
							<li>&#8358; {props.product.price}</li>
							<li>
								<ShoppingCartIcon className="block h-6 w-6 mx-5 cursor-pointer text-red-600" />
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="max-w-3xl mx-auto   border-y-2 border-gray-200 flex mt-8">
				<div className="flex   justify-around items-center my-6 w-full  ">
					<ul className="flex">
						<li className="mx-5">
							<img
								src="/images/grains.jpeg"
								className="object-cover"
								alt="product"
							/>
						</li>
						<li className="text-base">
							<p className=" font-semibold"> {props.product.name}</p>
							<p className="text-center "> {props.product.litter}</p>
						</li>
					</ul>

					<div className=" mx-2 self-end   text-black">
						<ul className="flex">
							<li>&#8358; 4000</li>
							<li>
								<ShoppingCartIcon className="block h-6 w-6 mx-5 cursor-pointer text-red-600" />
							</li>
						</ul>
					</div>
				</div>
			</div>{" "}
			<div className="max-w-3xl mx-auto   border-y-2 border-gray-200 flex mt-8">
				<div className="flex   justify-around items-center my-6 w-full  ">
					<ul className="flex">
						<li className="mx-2">
							<img
								src="/images/grains.jpeg"
								className="object-cover"
								alt="product"
							/>
						</li>
						<li className="text-base">
							<p className=" font-semibold"> {props.product.name}</p>
							<p className="text-center "> 4L</p>
						</li>
					</ul>

					<div className=" mx-2 self-end   text-black">
						<ul className="flex">
							<li className="text-base ">&#8358; 3000</li>
							<li>
								<ShoppingCartIcon className="block h-6 w-6 mx-5 cursor-pointer text-red-600" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductList;
