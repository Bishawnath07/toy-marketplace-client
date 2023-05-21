import useSetTitle from "../../Hook/useSetTitle/useSetTitle";


const Blogs = () => {
    useSetTitle('Blogs')
    return (
        <div className="max-w-5xl mx-auto my-10">
            <h1 className="text-4xl my-10 font-bold text-center text-red-700">Here are answers to all questions</h1>
            <h2 className="text-4xl font-bold text-lime-800 mb-5">1. What is an access token and refresh token? </h2>
            < p className="text-lg "><span className="text-lime-700">Answer: </span> A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
            <h2 className="text-4xl font-bold text-lime-800 my-5">2. How do they work and where should we store them on the client-side?</h2>
            <p>
                On the client-side, both the access token and refresh token should be securely stored to prevent unauthorized access. Best practices recommend storing them in a secure storage mechanism such as browser cookies with appropriate security flags (e.g., httpOnly, secure), or in the browsers local storage or session storage. The specific choice depends on the requirements and security considerations of your application.
            </p>
            <h2 className="text-4xl font-bold text-lime-800 my-5">3. What is SQL ?</h2>
            <p><span>Answer: </span> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <h4 className="text-4xl font-bold text-lime-800 my-5">4. Why use SQL database?</h4>
            <p>SQL actively protects the integrity of your database by providing ACID compliance. Due to its structured data, you will not require any integrated system support for using various types of data.Moreover, SQL is the highly preferable option for so many businesses due to its predefined structure and schemas.</p>
            <h4 className="text-4xl font-bold text-lime-800 my-5">5. Why use NoSQL database?</h4>
            <p>Its getting popularity by allowing you to store different data types together and you can easily scale by spreading around multiple servers.
                If you are in need of developing an application within a speculated time, then you can go for NoSQL which will speed up your performance with its rapid development phase.</p>
            <h2 className="text-4xl font-bold text-lime-800 my-5">6. What is express js?  </h2>
            <p>ExpressJS is a web framework that enables you to design a web application to handle a variety of different HTTP demands.</p>
            <h2 className="text-4xl font-bold text-lime-800 my-5">7. What is Nest JS?</h2>
            <p>Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
            <h4 className="text-4xl font-bold text-lime-800 my-5">8. What Is Nest.js Used For?</h4>
            <p>Nest.js is a server-side Node.js framework thats great for building highly testable and maintainable backend applications. You can create countless types of applications with Node.js; you are only limited by your applications features.</p>
            < h2 className="text-4xl font-bold text-lime-800 my-5">9. What is MongoDB aggregate ?</h2>
            <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            <h4 className="text-4xl font-bold text-lime-800 my-5">10. How Does Aggregation Work in MongoDB?</h4>
            <p>When you need to do more complex aggregation, you can use the MongoDB aggregation pipeline (heres a more detailed tutorial). Aggregation pipelines are collections of stages that, combined with the MongoDB query syntax, will allow you to obtain an aggregated result.

                Before we dive into the code, lets understand what the aggregation pipeline itself does and how it works. In the aggregation pipeline, you list out a series of instructions in a stage For each stage thats defined, MongoDB executes them one after another in order to give a finalized output you are able to use. Lets look at an example usage of the aggregate command:</p>
        </div>
    );
};

export default Blogs;