import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog } from '../../../store/blogSlice';
import { Link } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  console.log(data)
  return (
    <Layout>
      <div className="ml-5 flex justify-center flex-wrap space-x-5">
        {data && data.length > 0 ? (
          data.map((blog) => (
            <Card key={blog.id} blogs={blog} />
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </Layout>
  );
}

export default Home;