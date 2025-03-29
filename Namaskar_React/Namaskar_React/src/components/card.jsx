import React from "react";
import img from "../assets/IMG_1.jpg"
import { Link } from "react-router-dom";

function Card({blogs}) {
    console.log(blogs)
return (
    <Link to={`/blogs/${blogs._id}`}>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-4 ml-4 ">
        <Link to={`/blogs/${blogs._id}`}>
            <img className="rounded-t-lg" src={blogs.imageUrl} alt="hi" />
        </Link>
        <div className="p-5">
            <Link to={`/blogs/${blogs._id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blogs.title}

                </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {blogs.description}            </p>
            <Link
                to={`/blogs/${blogs._id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Read more
                <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </Link>
        </div>
    </div>
    </Link>
);
}

export default Card;
