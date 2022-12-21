import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import photo from '../assets/travel-icon--be-found-online-9.png'
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { user, logOut } = useContext(AuthContext);
	const handleLogout = () => {
		logOut()
			.then()
			.catch(err => console.log(err));
	}
	return (
		<div className="bg-black font-poppins">
			<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="relative flex items-center justify-between">
					<Link
						to="/"
						className="inline-flex items-center"
					>
						<div className="w-20">
							<img src={photo} alt="" />
						</div>

						<span className="ml-2 font-poppins text-xl font-bold tracking-wide text-green-700 uppercase">
							MR. Tour Guider
						</span>
					</Link>
					<ul className="flex items-center hidden space-x-8 lg:flex">
						<li>
							<Link
								to="/"
								className="font-medium tracking-wide text-green-700 transition-colors duration-200 hover:text-teal-accent-400"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/services"
								className="font-medium tracking-wide text-green-700 transition-colors duration-200 hover:text-teal-accent-400"
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								to="/blog"
								className="font-medium tracking-wide text-green-700 transition-colors duration-200 hover:text-teal-accent-400"
							>
								Blog
							</Link>
						</li>
						<li>
							{
								user?.uid ?

									<>
										<Link
											to="/myreviews"
											className="font-medium mr-5 tracking-wide text-green-700 transition-colors duration-200 hover:text-teal-accent-400"
										>
											My Reviews
										</Link>
										<Link
											to="/addservice"
											className="font-medium mr-5 tracking-wide text-green-700 transition-colors duration-200 hover:text-teal-accent-400"
										>
											Add Service
										</Link>
										<button
											onClick={handleLogout}
											className="font-medium tracking-wide px-2 py-2 rounded-lg hover:bg-green-700 hover:text-white text-green-700 transition-colors duration-200 hover:text-teal-accent-400"
										>
											Log Out
										</button>

									</>
									:
									<Link
										to="/login"

										className="font-medium tracking-wide text-green-700 transition-colors duration-200 hover:text-teal-accent-400"
									>
										Log in
									</Link>

							}
						</li>
					</ul>

					<div className="lg:hidden">
						<button
							aria-label="Open Menu"
							title="Open Menu"
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
							onClick={() => setIsMenuOpen(true)}
						>
							<svg className="w-5 text-green-700" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
								/>
								<path
									fill="currentColor"
									d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
								/>
								<path
									fill="currentColor"
									d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
								/>
							</svg>
						</button>
						{isMenuOpen && (
							<div className="absolute top-0 left-0 w-full">
								<div className="p-5 bg-black border rounded shadow-sm">
									<div className="flex items-center justify-between mb-4">
										<div>
											<Link
												to="/"
												className="inline-flex items-center"
											>
												<div className="w-20">
													<img src={photo} alt="" />
												</div>
												<span className="ml-2 text-xl font-bold tracking-wide text-green-700 uppercase">
													MR. Tour Guider
												</span>
											</Link>
										</div>
										<div>
											<button
												aria-label="Close Menu"
												title="Close Menu"
												className="p-2 -mt-2 -mr-2 transition duration-200 rounded  hover:text-black focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() => setIsMenuOpen(false)}
											>
												<svg className="w-5 text-green-700" viewBox="0 0 24 24">
													<path
														fill="currentColor"
														d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
													/>
												</svg>
											</button>
										</div>
									</div>
									<nav>
										<ul className="space-y-4">
											<li>
												<Link
													to="/"
													className="font-medium tracking-wide px-2 py-2 rounded-lg hover:bg-green-700 hover:text-white text-green-700 transition-colors duration-200 hover:text-teal-accent-400"
												>
													Home
												</Link>
											</li>
											<li>
												<Link
													to="/services"
													className="font-medium tracking-wide px-2 py-2 rounded-lg hover:bg-green-700 hover:text-white text-green-700 transition-colors duration-200 hover:text-teal-accent-400"
												>
													Services
												</Link>
											</li>
											<li>
												<Link
													to="/blog"
													className="font-medium tracking-wide px-2 py-2 rounded-lg hover:bg-green-700 hover:text-white text-green-700 transition-colors duration-200 hover:text-teal-accent-400"
												>
													Blog
												</Link>
											</li>
											{
												user?.uid ?

													<>
														<Link
															to="/myreviews"
															className="font-medium mr-5 tracking-wide text-green-700 transition-colors duration-200 hover:text-teal-accent-400"
														>
															My Reviews
														</Link>
														<Link
															to="/addservice"
															className="font-medium mr-5 tracking-wide text-green-700 transition-colors duration-200 hover:text-teal-accent-400"
														>
															Add Service
														</Link>
														<button
															onClick={handleLogout}
															className="font-medium tracking-wide px-2 py-2 rounded-lg hover:bg-green-700 hover:text-white text-green-700 transition-colors duration-200 hover:text-teal-accent-400"
														>
															Log Out
														</button>

													</>
													:
													<Link
														to="/login"

														className="font-medium tracking-wide text-green-700 transition-colors duration-200 hover:text-teal-accent-400"
													>
														Log in
													</Link>

											}
											
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;