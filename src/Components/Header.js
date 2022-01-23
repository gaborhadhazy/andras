import axios from "axios";
import {useState, useEffect} from "react";

function Header() {
    const [categories, set_categories] = useState([])

    const fetch = () => {
        axios ({
            method: "get",
            url: "http://localhost:3001/categories"
        }).then(res => set_categories(res.data))
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div className="header-container">
            {
                categories.map(category_data => <h2 className="header-item">{category_data.title}</h2>)
            }

        </div>
    );
}
export default Header