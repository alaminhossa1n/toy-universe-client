import useTitle from "../hooks/TitleHooks";

const Blog = () => {
    useTitle('Toy - Blog')
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Some Common Questions</h1>
                <div className="bg-white rounded-lg shadow p-6 space-y-5">
                    <div>
                        <p className="text-gray-700 mb-4 font-bold">
                            Access Token and Refresh Token:
                        </p>
                        <li>Access Token: An access token is a credential used by a client to access protected resources on behalf of a user. It typically has an expiration time and is issued by an authorization server.</li>
                        <li>Refresh Token: A refresh token is a credential that can be used to obtain a new access token without requiring the user to re-authenticate. It is typically used when an access token expires.</li>
                    </div>
                    <div>
                        <p className="text-gray-700 mb-4 font-bold">
                            SQL and NoSQL Databases:
                        </p>
                        <li>SQL (Structured Query Language) databases are based on a relational model, where data is stored in tables with predefined schemas and relationships between tables.</li>
                        <li>NoSQL (Not Only SQL) databases are non-relational databases that provide flexible schema design and horizontal scalability. They can store data in various formats like key-value pairs, documents, column-family, or graph structures.</li>
                    </div>
                    <div>
                        <p className="text-gray-700 mb-4 font-bold">
                            What is express js and What is Nest:
                        </p>
                        <li>Express.js: Express.js is a fast and minimalist web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features and middleware.</li>
                        <li>Nest.js: Nest.js is a progressive Node.js framework for building scalable and efficient server-side applications. It is built with TypeScript and takes advantage of modern JavaScript features and design patterns.</li>
                    </div>
                    <div>
                        <p className="text-gray-700 mb-4 font-bold">
                            What is MongoDB aggregate and how does it work:
                        </p>
                        <li>MongoDB Aggregate: MongoDB Aggregate is a powerful aggregation framework provided by the MongoDB database. It allows you to perform advanced data aggregation operations like grouping, filtering, sorting, and joining across multiple documents in a collection.</li>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;