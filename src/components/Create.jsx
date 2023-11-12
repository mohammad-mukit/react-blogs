import { useState } from "react";
import {useHistory} from 'react-router-dom'

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Mukit');
    const history = useHistory();


    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title,body,author};

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            // console.log('New blog Added');
            history.push('/');
            
        })


    }

    return ( 
        <div className="create">
            <h2>Add New Blogs</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title} 
                onChange={(e) => setTitle(e.target.value)}/>

                <label>Blog Body</label>
                <textarea 
                required
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label> Blog Author</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Mukit">Mukit</option>
                    <option value="Rafat">Rafat</option>
                    <option value="Raiyan">Raiyan</option>
                    <option value="Rafan">Rafan</option>
                    <option value="Naima">Naima</option>
                </select>
                <button>Add Blog</button>
            </form>

        </div>
     );
}
 
export default Create;