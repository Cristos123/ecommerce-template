import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import Logo from "./../assets/tailwind-css-logo.svg";
import { Link, useLocation } from "react-router-dom";

const navigation = [
	{ name: "Dashboard", link: "/", isActive: false },
	{ name: "Product", link: "/", isActive: false },
	{ name: "Contact-Us", link: "/contact-us", isActive: false },
	{ name: "Calendar", link: "/alendar", isActive: false },
	{ name: "Track orders", link: "#", isActive: false },
	{ name: "Place orders", link: "#", isActive: false },
	{ name: "Order Cancellation", link: "#", isActive: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {
	return (
		<Disclosure as="nav" className="bg-primary">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex-shrink-0 flex items-center">
									<img
										className="block lg:hidden h-8 w-auto"
										src={Logo}
										alt="Product "
									/>
									<img
										className="hidden lg:block h-8 w-auto"
										src={Logo}
										alt="Product or Company Logo"
									/>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								{/* Profile dropdown */}
								<Menu as="div" className="ml-3 relative">
									<div>
										<Menu.Button className="text-white inline-flex items-center justify-center p-2 rounded-md  hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
											<span className="sr-only">Open main menu</span>

											<MenuIcon className="block  h-6 w-6" aria-hidden="true" />
										</Menu.Button>
									</div>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items
											className="origin-top-right w-72 z-20 absolute 
                                        right-0 mt-2   rounded-md shadow-lg py-1 px-4 bg-primary text-white ring-1 ring-black ring-opacity-5 focus:outline-none"
										>
											<Disclosure.Panel className="">
												<div className="px-2 pt-2 pb-3 space-y-1">
													{navigation.map((item) => (
														<Disclosure.Button
															key={item.name}
															as="a"
															href={item.link}
															className={classNames(
																item.isActive
																	? "bg-red-900 text-white"
																	: "text-white-900 hover:bg-gray-700 hover:text-white",
																"block px-3 py-2 rounded-md text-base font-medium"
															)}
															aria-current={item.current ? "page" : undefined}
														>
															{item.name}
														</Disclosure.Button>
													))}
												</div>
											</Disclosure.Panel>

											<Menu.Item>
												{({ active }) => (
													<Link
														to="/login"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block font-bold py-4 px-4 rounded bg-blue-500  hover:bg-blue-700  overflow-hidden  shadow-md  text-white text-center  text-sm  "
														)}
													>
														<span className="sr-only">Login</span>
														Login/Signup
													</Link>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>
				</>
			)}
		</Disclosure>
	);
}
