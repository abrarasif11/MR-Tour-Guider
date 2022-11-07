import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="mx-auto flex flex-col max-w-md p-6 rounded-md mt-10 mb-10 sm:p-10 bg-slate-300 dark:text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Log in</h1>
		<p className="text-sm dark:text-gray-400">Log in to access your account</p>
	</div>
	<form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
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
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-black text-green-700">Log in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
				<Link rel="noopener noreferrer" to='/signup' className="hover:underline text-blue-700">Sign up</Link>.
			</p>
		</div>
	</form>
</div>
    );
};

export default Login;