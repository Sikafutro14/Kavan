import { useEffect, useState } from "react";
import { fetchCategories } from "../services/api";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then(data => setCategories(data));
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Categories</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id} className="border-b py-2">
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
