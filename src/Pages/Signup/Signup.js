
	import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {
  const { user, creatUser, googleSignIn } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const username = form.username.value;
    const password = form.password.value;
   
    console.log({ email, password, username });

    creatUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

 
  
    return (
        <div className="font-poppins w-full mt-10 mb-10 mx-auto max-w-md p-8 space-y-3 rounded-xl  bg-slate-300 dark:text-gray-100">
	<h1 className="text-2xl font-bold text-center">Sign Up</h1>
	<form onSubmit={handleSignUp}  action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
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
		<p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
				<Link rel="noopener noreferrer" to='/login' className="hover:underline text-blue-700"> Log in</Link>.
			</p>
	</form>
	 
	
</div>
    );
};

export default SignUp;