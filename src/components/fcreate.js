import { useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

export function FCreate(props) {
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        setTitle('');
    },[]);  


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${title}`);

        const newBook = {
            title:title,
            cover:cover,
            author:author
        }

        axios.post('http://localhost:4000/api/books',newBook)
        .then((response)=>{
            navigate('/read');
        })
        .catch((err)=>{console.log(err)});
    }

    return (
        <div>
            <h1>well kid</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add Book Title</label>
                    <input
                        type="text"
                        className="form control"
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}>
                    </input>       
                </div>
                <div>
                    <label>Add Book Cover</label>
                    <input
                        type="text"
                        className="form control"
                        value={cover}
                        onChange={(e) => {setCover(e.target.value)}}>
                    </input>       
                </div>
                <div>
                    <label>Add Book</label>
                    <input
                        type="text"
                        className="form control"
                        value={author}
                        onChange={(e) => {setAuthor(e.target.value)}}>
                    </input>       
                </div>
                <input type="Submit" value="Add Book"></input>
            </form>
        </div>
    );
}