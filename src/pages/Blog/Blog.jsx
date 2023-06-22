import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <section className="question-container-grid desktop-max">
        <article className="question-container bg-primary-400 text-neutral-100">
          <h1 className="blog-title">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <p>
            An access token is a credential with limited time. It issued to
            client by server after a successful authentication. And client use
            it to authorize and validate its request to server.
            <br />
            <br />
            A Refresh token is similar to access token but it has long
            life-span. It also issued to client by server during authentication.
            It is used to obtain a new access token when its expires.
            <br />
            <br />
            An Access token is typically stored in clients memory or
            local-storage since it has a sort life-span. And refresh token is
            more sensitive so, it stored in more secure place like a secure
            cookie or device{`'`}s keychain.
          </p>
        </article>
        <article className="question-container bg-secondary-400 text-neutral-100">
          <h1 className="blog-title">Compare SQL and NoSQL databases?</h1>
          <p>
            <strong>SQL: </strong> SQL databases uses SQL(structured query
            language) for defining and manipulating data. SQL databases follow a
            a fixed schema with predefined tables and relationship. And thats
            why it called relational database. It{`'`}s ideal for complex
            relationship and structured data.
            <br />
            <br />
            <strong>NoSQL: </strong> It usually used to handle unstructured,
            semi-structured and rapidly changing data. This kind of database
            does not rely on a fixed schema and allows flexible data models.
            This kind of database suitable for applications with large-scale
            data, real-time analytics, and high traffic loads.
          </p>
        </article>
        <article className="question-container bg-neutral-100 text-secondary-400">
          <h1 className="blog-title">What is express js? What is Nest.js?</h1>
          <p>
            <strong>Express.js: </strong> Express.js is a web framework for
            node.js. It provides a simple and flexible set of features to build
            web applications and APIs. It has basic routing and middleware
            support, and integration with various template engines.
            <br />
            <br />
            <strong>Nest.js: </strong> Nest.js is Also is web framework for
            node.js. But it is build on top of express.js. Nest.js follows a
            modular architecture inspired by Angular, allowing developers to
            organize their code in a structured and scalable manner
          </p>
        </article>
        <article className="question-container bg-secondary-500 text-neutral-100">
          <h1 className="blog-title">
            What is MongoDB aggregate and how does it work?
          </h1>
          <p>
            In MongoDB, the aggregate framework is a powerful tool used for
            performing advanced data analysis and transformation operations on
            collections of documents. It allows you to process and combine data
            from multiple documents or collections in a flexible and efficient
            manner.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Blog;
