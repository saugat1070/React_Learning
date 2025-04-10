import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { singleBlog } from "../../../store/blogSlice";

function SingleBlog() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state) => state.blog);


  useEffect(() => {
    console.log("useEffect triggered with id:", id);
    dispatch(singleBlog(id));
}, [dispatch, id]);

  return (
    <Layout>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={data.data.imageUrl}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <Link to="/blogs/edit">
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                      Edit
                    </button>
                  </Link>
                </div>
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                    
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {data.data.title || "Title"}
              </h2>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Blog Description
                </span>
                <p className="bg-amber-50">{data.data.category}</p>{" "}
                <p className="bg-amber-50 ml-3">{data.data.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {data.data.description || "No description available."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SingleBlog;
