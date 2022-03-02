import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPosts, removePosts } from '../slices/postSlice';
const Create = (props) => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        title: '',
        description: '',
        category: 'technology',
    });
    

    const handleDescription = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const createPost = (e) => {
        e.preventDefault();
        props.history.push("/");
        const post = {
            id : Date.now(),
            title : state.title,
            category: state.category,
            description: state.description
        }
        dispatch(addPosts(post));
        
    }
    return (
        <div className="create mt-96 mt-128">
            <div className="container">
                <form onSubmit={createPost}>
                    <div className='row'>
                        <div className='col-1'>
                            <div className="group">
                                <input type="submit" className="btn" name="" id="" value="PUBLISH" />
                            </div>
                        </div>
                    </div>
                    <div className="row ml-minus-16 mr-minus-16">
                        <div className="col-9" style={{ padding: "1rem" }}>
                            <div className="card">
                                <h3 className="card__h3">Create a new post</h3>
                                <div className="group">
                                    <label htmlFor="title">Post title</label>
                                    <input type="text"
                                        name="title"
                                        id="title"
                                        value={state.title}
                                        onChange={handleInput}
                                        className="group__control"
                                        placeholder="Post title" />
                                </div>
                                <div className="group">
                                    <label htmlFor="">Category</label>
                                    <select className="group__control" name="category" onClick={handleInput}>
                                        <option value="technology">Technology</option>
                                        <option value="entertainment">Entertainment</option>
                                        <option value="sports">Sports</option>
                                        <option value="politics">Politics</option>
                                        <option value="health">Health</option>
                                        <option value="lifestyle">Lifestyle</option>
                                    </select>
                                </div>
                                <div className="group">
                                    <label htmlFor="description">Blog Description</label>
                                    <textarea
                                        style={{ height: "400px" }}
                                        name="description"
                                        id="description"
                                        cols="10"
                                        rows="10"
                                        defaultValue={state.description}
                                        onChange={handleDescription}
                                        className="group__control"
                                        placeholder="Write Your Blog Here..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Create
