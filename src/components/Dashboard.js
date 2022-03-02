// import React from 'react'
// import { useSelector } from 'react-redux';
// import { selectPosts } from "../slices/postSlice";
// 

import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from "../slices/postSlice";
import { Link } from "react-router-dom";
import { removePosts } from '../slices/postSlice';

const Dashboard = () => {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    const deletePost = (id) => {
        // dispatch(removePosts(id))
        console.log(id)
    }
   

    return (
        <>

            <div className="container mt-64 mt-128">
                <h3 className="card__h3">All Posts</h3>
                <div className="row row ml-minus-16 mr-minus-16">

                    <div className="col-8" style={{ padding: "1rem" }}>
                        {
                            posts.map(post => (
                                <div className="dashboard">
                                    <div className="dashboard__detail">
                                        <div className='dashboard__detail__title'>
                                            <Link>Title: {post.title}</Link>
                                            <p style={{ color: "white" }}>Category: {post.category}</p>
                                            <p className="post__details__body">
                                                Description: {String(post.description.slice(0, 250)).replace(/<[^>]+>/g, '')}.....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard