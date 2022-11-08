import React from 'react';

const Signup = () => {
    return (
        <div className="font-poppins w-full mt-10 mb-10 mx-auto max-w-md p-8 space-y-3 rounded-xl  bg-slate-300 dark:text-gray-100">
	<h1 className="text-2xl font-bold text-center">Sign Up</h1>
	<form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label for="username" className="block dark:text-gray-400">Username</label>
			<input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="email" className="block dark:text-gray-400">Email</label>
			<input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-900 dark:text-gray-100 border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block dark:text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="******" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 border-violet-400" />
			
		</div>
		<button className="block w-full p-3 text-center rounded-sm text-green-700 bg-black">Sign in</button>
	</form>
	
	
</div>
    );
};

export default Signup;