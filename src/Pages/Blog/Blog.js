import React from 'react';

const Blog = () => {
    return (
        <div >
        <section className="dark:bg-gray-800 font-poppins dark:text-gray-100">
<div className="font-poppins container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
    <h2 className="text-2xl font-semibold sm:text-4xl"> Question Section </h2>
    
    <div className="space-y-4 mt-10">
        <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 text-2xl font-semibold focus:outline-none focus-visible:ring-violet-400"> Difference between SQL and NoSQL </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              <span>
                <p>
                 SQL -
                 <span>
                    <p>
                    RELATIONAL DATABASE MANAGEMENT SYSTEM.
                    </p>
                </span> 
                <span>
                    <p>
                    These databases have fixed or static or predefined schema.
                    </p>
                </span>
                <span>
                    <p>
                    Vertically Scalable.
                    </p>
                </span>
                <span>
                    <p>
                    Follows ACID property.
                    </p>
                </span>
                <span>
                    <p>
                    Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.
                    </p>
                </span>

                </p></span>  
                <span>
                    <br />
                    <p>
                        No SQL - 
                        <span>
                            <p>
                            Non-relational or distributed database system.
                            </p>
                        </span>
                        <span>
                            <p>They have dynamic schema</p>
                        </span>
                        <span>
                            <p>
                            Horizontally scalable.
                            </p>
                        </span>
                        <span>
                            <p>
                            Follows CAP(consistency, availability, partition tolerance).
                            </p>
                        </span>
                        <span>
                            <p>
                            Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
                            </p>
                        </span>
                    </p>
                </span>
    </p>
        </details>
        <details className="w-full  border rounded-lg">
            <summary className="px-4 py-6 text-2xl font-semibold focus:outline-none focus-visible:ring-violet-400">What is JWT, and how does it work?
</summary>
            <span>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                JWT is JSON WEB TOKEN.
                <span>
                    <p>
                    JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    </p>
                </span>
            </p>
            </span>            
        </details>
        <details className="w-full border rounded-lg">
            <summary className="text-2xl font-semibold px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is the difference between javascript and NodeJS?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
            JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.
JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.
JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.
JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development
JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.
 </p>
        </details>
        <details className="w-full border rounded-lg">
            <summary className="px-4 text-2xl font-semibold py-6 focus:outline-none focus-visible:ring-violet-400">How does NodeJS handle multiple requests at the same time?</summary>
            <span>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
            </p>
            </span>
        </details>
    </div>
</div>
</section>
    </div>
    );
};

export default Blog;