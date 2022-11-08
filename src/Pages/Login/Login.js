import { Link } from 'react-router-dom';
	import { GoogleAuthProvider } from "firebase/auth";
	import React, { useContext } from "react";
	import { AuthContext } from "../AuthProvider/AuthProvider";
	
	const Login = () => {
	  const { user, signIn, googleSignIn } = useContext(AuthContext);
	  const provider = new GoogleAuthProvider();
	  const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log({ email, password });
	
		signIn(email, password)
		  .then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
			form.reset();
		  })
		  .catch((error) => {
			console.error(error);
		  });
	  };
	
	  const handleGoogleSignIn = () => {
		googleSignIn(provider)
		  .then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
		  })
		  .catch((error) => {
			console.error(error);
		  });
	  };

    return (
        <div className="font-poppins mx-auto flex flex-col max-w-md p-6 rounded-md mt-10 mb-10 sm:p-10 bg-slate-300 dark:text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Log in</h1>
		<p className="text-sm dark:text-gray-400">Log in to access your account</p>
	</div>
	<form onSubmit={handleSubmit}  action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<label for="email" className="flex justify-between block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-md border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="******" className="w-full px-3 py-2 border rounded-md border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-black text-green-700">Log in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
				<Link  to='/signup' className="hover:underline text-blue-700"> Sign up</Link>.
			</p>
		</div>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
		

	</div>
</div>
    );
};

export default Login;