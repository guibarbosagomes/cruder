import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header/Header";

import { appendErrors, useForm } from 'react-hook-form';

import './post.css';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {useNavigate} from 'react-router-dom';


const validationPost = yup.object().shape({
    title: yup.string().required("Campo requerido.").max(40,"O titulo prescisar ter menos de 40 caracteres."),
    description:yup.string().required("Campo requerido.").max(150,"O titulo prescisar ter menos de 150 caracteres."),
    content: yup.string().required("Campo requerido.").max(500,"O titulo prescisar ter menos de 500 caracteres.")
});

function Post() {

    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver : yupResolver(validationPost)
    });

    const addPost = data => axios.post("http://localhost:5000/posts", data)
        .then(()=>{
            console.log('Deu tudo certo !');
            navigate("/");
        })
        .catch(()=>{
            console.log('Deu errado !')
        })

    return (
        <div>
            <Header />

            <main>
                <div className="card-post">

                    <h1> Criar postagem</h1>
                    <div className="line-post"></div>

                    <div className="card-body-post">
                        
                        <form onSubmit={handleSubmit(addPost)}>
                            <div className="fields">
                                <label>Título</label>
                                <input type="text" name="title" {...register("title")}></input>
                                <p className="error-message">{errors.title?.message }</p>
                            </div>
                            
                            <div className="fields">
                                <label>Descrição</label>
                                <input type="text" name="description" {...register("description")}></input>
                                <p className="error-message">{errors.description?.message }</p>
                            </div>

                            <div className="fields">
                                <label>Conteúdo</label>
                                <textarea type="text" name="content" {...register("content")}>

                                </textarea>
                                <p className="error-message">{errors.content?.message }</p>
                            </div>

                            <div className="btn-post">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

        </div>
    )
}


export default Post;