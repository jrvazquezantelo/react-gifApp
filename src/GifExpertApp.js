import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);   
    return (
        <>
            <h2>MINI MUES ESTA AQUI  </h2>
            <AddCategory setCategories = {setCategories} />
            <hr/>
                {
                    categories.map(e => (
                        <GifGrid
                          key = {e}
                          category = {e}
                        />        
                    ))
                }
        </>
    );
}
export default GifExpertApp;