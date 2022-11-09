import React from 'react';

const Review = () => {
    const handleReview = (event) =>{
     event.preventdefault();
     const form = event.target;
		const email = form.email.value;
		const username = form.username.value;
        const imgurl = form.imgurl.value;
 		console.log({ email });
    }
    return (
        <div className='grid grid-cols-2'>
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-slate-200 dark:text-gray-100">
        <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">Your Review!</h2>
            <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
                <div className="flex space-x-3">
                </div>
            </div>
            <form  onSubmit={handleReview} action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
            <div className="flex justify-between mb-2">
					<label htmlFor="username" className="text-sm">User Name</label>
				</div>
            <input type="text" name="username" id="username" placeholder="username" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
				<label htmlFor="email" className="block flex justify-between mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="imgurl" className="text-sm">Image URL</label>
				</div>
				<input type="text" name="imgurl" id="imgurl" placeholder="image url" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
		</div>
		<div className="space-y-2">
		</div>
        <div className="flex flex-col w-full">
                <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 bg-violet-400">Leave Review</button>
            </div>
	</form>
           
        </div>
        <div className="flex items-center justify-center">
            <a rel="noopener noreferrer" href="#" className="text-sm bg-black px-3 py-3 rounded-lg text-gray-400">Maybe later</a>
        </div>
    </div>
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-slate-200 dark:text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">Leroy Jenkins</h4>
				<span className="text-xs dark:text-gray-400">2 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">4.5</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-400">
		<p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
		<p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
	</div>
        </div>
        </div>
    );
};

export default Review;