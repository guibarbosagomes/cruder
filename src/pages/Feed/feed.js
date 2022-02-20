import { Link } from "react-router-dom";

import axios from "axios";

import { useState, useEffect } from "react";

import HeaderMain from '../../components/HeaderMain/HeaderMain';

import More from '../../images/more.svg'

import './feed.css'

function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch(() => {
                console.log("deu errado");
            })
    }, [])

    function deletePost(id){
        
        axios.delete(`http://localhost:5000/posts/${id}`)
        
        setPosts(posts.filter(post => post.id !== id))
    }

    return (
        <div>
            <HeaderMain />

            <main>
                <div className="cards">

                    {posts.map((post, key) => {
                        return (
                            <div className="card" key={key}>
                                
                                <header>
                                    <h2> {post.title} </h2>
                                    <img src={More} />
                                </header>
                                
                                <div className="line"></div>

                                <p>{post.description}</p>

                                <div className="btns">
                                    <div className="btn-edit">
                                        
                                        <Link to={{pathname: `/edit/${post.id}`}}>
                                            <button>Edit</button>
                                        </Link>
                                    </div>
                                    <div className="btn-readmore">
                                    <Link to={{pathname: `/lermais/${post.id}`}}>
                                            <button>Ler mais</button>
                                        </Link>
                                    </div>
                                    <div className="btn-delete">
                                        
                                            <button onClick={() => deletePost(post.id)}>Excluir</button>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </main>

        </div>
    )
}


export default Feed;