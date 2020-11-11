import { data } from "../data/data";
import { v4 as uuidv4 } from "uuid";

export const loadData = ()=>{    
    const d = JSON.parse(localStorage.getItem("blog-data"));
    return d || data;
};

export const loadDataById = (id)=>{
    const d = JSON.parse(localStorage.getItem("blog-data")) || data;
    return d.find((e)=>e._id === id);
}

export const saveData = ({title, content})=>{
    const obj = {
        "_id": uuidv4(),
        title,
        "author": {
            "_id": uuidv4(),
            "name":"Anónimo",
            "role": "user",
            "photo": "https://img.favpng.com/22/14/20/computer-icons-user-profile-png-favpng-t5jjbVtARafBFMz6SeBYs6wmS.jpg"
        },
        "date": (new Date()).toLocaleDateString("en-US"),
        "message": content,
        "responses": []
    }

    const d = JSON.parse(localStorage.getItem("blog-data")) || data;
    d.push(obj);
    localStorage.setItem("blog-data", JSON.stringify(d));
}

export const addComment = (comment, id)=>{
    const d = JSON.parse(localStorage.getItem("blog-data")) || data;

    const newContent = d.map((item)=>{
        if(item._id === id){
            item.responses.push({
                "_id": uuidv4(),
                "author_name": "Anónimo",
                "author_id": uuidv4(),
                "message":comment,
                "date": (new Date()).toLocaleDateString("en-US")
            });
        }

        return item;
    });

    localStorage.setItem("blog-data", JSON.stringify(newContent));

    return newContent.find((i)=>i._id === id);
}