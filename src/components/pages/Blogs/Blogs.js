import React from 'react';
import useTitle from '../../../useTitle/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='my-24'>
            <div className='w-11/12 mx-auto my-12'>
                <div className="card w-full bg-neutral shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Difference between SQL and NoSQL</h2>
                        <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis. SQL is widely used by top tech companies like Facebook, Whatsapp, etc for data processing solutions. It is used for different types of RDBMS including Oracle, MySQL, SQLServer, etc. NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form. Companies like Twitter and Google, with a tremendous amount of data set like the user data of the social platforms, prefer to use NoSQL over any other RDBMS.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto my-12'>
                <div className="card w-full bg-neutral shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is JWT, and how does it work?</h2>
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
</p>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto my-12'>
                <div className="card w-full bg-neutral shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                        <p>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser. JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML. JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development. JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser. JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.</p>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto my-12'>
                <div className="card w-full bg-neutral shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.  EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;