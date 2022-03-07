import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
	return (
		<>
			<div className="min-h-screen flex items-center justify-center bg-red-50 py-12 px-4">
				<div className="max-w-2xl w-full ">
					<h2 className="text-center mt-6 text-3xl font-extrabold text-black">
						Login
					</h2>
					<div className=" bg-white max-w-2xl rounded overflow-hidden text-black shadow-xl p-5">
						<div className="text-center my-6 ">
							<button className="bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded px-4">
								Login with Facebook
							</button>
							<button className="bg-transparent ml-3  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded px-4">
								Email
							</button>
						</div>
						<h1 className="mt-6 text-3xl text-center font-extrabold text-black">
							{" "}
							OR
						</h1>
						<form className="space-y-4">
							<div className="rounded-md shadow-sm -space-y-px">
								<div className="grid gap-6 py-3 ">
									<div className="col-span-12">
										<label
											htmlFor="usernameOrEmail"
											className="block text-sm font-medium "
										>
											Phone Number
										</label>
										<input
											type="text"
											name="phonenumber"
											id="phonenumber"
											className="mt-1  py-2 px-4 focus:ring-indigo-500 border focus:border-indigo-500 w-full block shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>
								</div>
								<div className="grid gap-6  py-2">
									<div className="col-span-12">
										<label
											htmlFor="password"
											className="block text-sm font-medium "
										>
											Password
										</label>
										<input
											type="password"
											name="password"
											id="password"
											className="mt-1  py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 w-full border block shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>
								</div>
								<button
									type="submit"
									className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500"
								>
									Login
								</button>
								<p className="text-center text-sm text-gray-800 pt-3">
									Dont have an account yet
									<Link
										to="/sign-up"
										className="no-underline ml-2 border-b border-blue-800 text-blue-900"
									>
										Sign Up
									</Link>
								</p>
								<p className="text-center text-sm text-gray-800  pt-4">
									<Link
										to="/forget-password"
										className="no-underline ml-2 border-b border-blue-800 text-blue-900"
									>
										Forget password
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
