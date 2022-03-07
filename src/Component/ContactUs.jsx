import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
	return (
		<div className="flex justify-center items-center h-screen mx-auto ">
			<form action="#" className="w-full md:w-3/4 lg:w-3/6 p-4">
				<div className="grid gap-6 p-3 ">
					<div className="col-span-12">
						<label htmlFor="email" className="block text-sm font-medium ">
							Email
						</label>
						<input
							className="block mt-2 appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
							type="email"
							placeholder="Email Id"
							required
						/>
					</div>
				</div>
				<div className="grid gap-6 p-3 ">
					<div className="col-span-12">
						<label htmlFor="help" className="block text-sm font-medium ">
							How can we help you
						</label>
						<input
							className="block mt-2 appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
							type="text"
							placeholder="How can we help you"
							required
						/>
					</div>
				</div>

				<div className="grid gap-6 p-3 ">
					<div className="col-span-12">
						<label htmlFor="message" className="block text-sm  font-medium ">
							Message
						</label>
						<textarea
							className="resize-none mt-2  block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56"
							placeholder="Message"
							required
						></textarea>
					</div>
				</div>

				<div className="p-3 pt-4">
					<button className="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded text-2xl">
						Submit
					</button>
				</div>
				<p className="text-center text-sm text-gray-800 pt-3">
					<span className="border-b border-blue-800 text-blue-900">
						{" "}
						Call us on 08102267489{" "}
					</span>
				</p>
				<p className="text-center text-sm text-gray-800  pt-4">
					<Link
						to="/whatsapplink"
						className="no-underline ml-2 border-b border-blue-800 text-blue-900"
					>
						whatsapp us
					</Link>
				</p>
			</form>
		</div>
	);
};

export default ContactUs;
