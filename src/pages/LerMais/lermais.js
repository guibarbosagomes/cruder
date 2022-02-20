import { Link } from "react-router-dom";
import axios from "axios";

import HeaderMain from '../../components/HeaderMain/HeaderMain';

import More from '../../images/more.svg'

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";


function LerMais() {

    const { id } = useParams();

    const [lermais, setLerMais] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:5000/posts/${id}`)
        .then((response) => {
            setLerMais(response.data);
        })
        
    }, [])
    
    return (
        <div>
            <Header />

            <main>
                <div className="cards">

                            <div className="card">
                                
                                <header>
                                    <h2> {lermais.title} </h2>
                                    <img src={More} />
                                </header>
                                
                                <div className="line"></div>

                                <p>{lermais.description}</p>

                            </div>

                </div>
            </main>

        </div>
    )
}


export default LerMais;