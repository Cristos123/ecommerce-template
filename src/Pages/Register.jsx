import React from "react";
import { Link } from "react-router-dom";

function SignUp(props) {
	return (
		<div>
			<div
				className={`min-h-screen flex items-center justify-center bg-red-50 py-12 px-4 sm:px-6 lg:px-8`}
			>
				<div className="max-w-2xl w-full ">
					<h2 className="text-center mt-6 text-3xl font-extrabold text-black">
						Create Account
					</h2>
					<div className=" bg-white max-w-2xl rounded overflow-hidden text-black shadow-xl p-5">
						<form className="space-y-4">
							<div className="rounded-md shadow-sm -space-y-px">
								<div className="grid gap-6">
									<div className="col-6">
										<label
											htmlFor="firstname"
											className="block text-sm font-medium "
										>
											First name
										</label>
										<input
											type="text"
											name="firstname"
											id="firstname"
											className="mt-1 px-4 py-2  pl-3 focus:ring-indigo-500 focus:border-indigo-500 w-full block shadow-sm sm:text-sm border border-gray-300 rounded-md"
										/>{" "}
									</div>
									<div className="col-6">
										<label
											htmlFor="lastname"
											className="block text-sm font-medium "
										>
											Last name
										</label>
										<input
											type="text"
											name="lastname"
											id="lastname"
											className="mt-1 px-4 py-2  pl-3 focus:ring-indigo-500 focus:border-indigo-500 w-full block shadow-sm sm:text-sm border border-gray-300 rounded-md"
										/>
									</div>
								</div>
								<div className="grid gap-6 py-3 ">
									<div className="col-span-12">
										<label
											htmlFor="email"
											className="block text-sm font-medium "
										>
											Email
										</label>
										<input
											type="text"
											name="email"
											id="email"
											className="mt-1 px-4 py-2  pl-3 focus:ring-indigo-500 border focus:border-indigo-500 w-full block shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>
								</div>
								<div className="grid gap-6  py-2">
									<div className="col-span-12">
										<label
											htmlFor="subject"
											className="block text-sm font-medium "
										>
											Phone Number
										</label>
										<input
											type="text"
											name="phonenumber"
											id="phonenumber"
											className="mt-1 px-4 py-2  pl-3 focus:ring-indigo-500 focus:border-indigo-500 border w-full block shadow-sm sm:text-sm border-gray-300 rounded-md"
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
											className="mt-1 px-4 py-2  pl-3 focus:ring-indigo-500 focus:border-indigo-500 w-full border block shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>
								</div>
								<div className="grid gap-6  py-2">
									<div className="col-span-12">
										<label
											htmlFor="confirmPassword"
											className="block text-sm font-medium "
										>
											Confirm Password
										</label>
										<input
											type="password"
											name="confirmPassword"
											id="confirmPassword"
											className="mt-1  px-4 py-2  focus:ring-indigo-500 border focus:border-indigo-500 w-full block shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>
								</div>
								<div className="grid gap-6 justify-items-center py-2">
									<div className="col-span-12">
										<label htmlFor="agree" className=" text-sm  font-medium ">
											{" "}
											<input
												type="checkbox"
												name="agree"
												id="agree"
												className="mt-1 px-4 py-2  pl-3 form-checkbox border focus:ring-indigo-500 focus:border-indigo-500   shadow-sm sm:text-sm border-gray-300 "
											/>
											<span className="ml-2">
												I agree to the{" "}
												<span className="underline">Terms and Conditions</span>{" "}
											</span>
										</label>{" "}
									</div>
								</div>
								<button
									type="submit"
									className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md cursor-pointer text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-offset-2 focus:ring-blue-500"
								>
									Register
								</button>
								<p className="text-center text-sm py-5 text-gray-800 mt-6">
									Already have an account
									<Link
										to="/login"
										className="no-underline ml-2 border-b border-blue-800 text-blue-900"
									>
										Log in
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
