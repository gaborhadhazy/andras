import React from 'react';
import axios from "axios"
import {useState, useEffect} from "react";
import {motion} from "framer-motion"
import {Link} from "react-router-dom";

function Experiments(props) {
    const [categories, setCategories] = useState([])

    const fetch = () => {
        axios({
            method: "get",
            url: "http://localhost:3001/categories"
        }).then(res => setCategories(res.data))
    }

    useEffect(() => {
        fetch()
    }, [])
    return (

        <div className="experiments-container">
            {
                categories.map(category_data => <Link to="#"><motion.button  id={category_data.id} className="experiments-item" whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)", boxShadow: "0px 0px 8px rgb(255, 255, 255)"}}>{category_data.title}</motion.button></Link>)
            }
        </div>
    );
}

export default Experiments;