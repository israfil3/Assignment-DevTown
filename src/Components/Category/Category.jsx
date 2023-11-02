import { useState } from "react";
import AllProduct from "../Product/AllProduct";
import Bag from "../CategoryProduct/Bag/Bag";
import Bicycle from "../CategoryProduct/bicycle/Bicycle";
import Bottle from "../CategoryProduct/Bottle/Bottle";
import Jacket from "../CategoryProduct/Jacket/Jacket";
import Smartphone from "../CategoryProduct/smartphone/Smartphone";
import Watch from "../CategoryProduct/watch/Watch";
import { DivC, H1, Select } from "../../ProductStyle";

const Category = () => {
    const [selectProduct, setSelectProduct] = useState('allProduct')
    const handleProductChange = (event) => {
        event.preventDefault()
        setSelectProduct(event.target.value);
      };
    return (
       <>
       <div>
            <H1>Product</H1>
            <hr />
            <hr />
       </div>
        <DivC>
          <div className="">
            <label htmlFor="trimSelect">Select Trim:</label>
            <Select
              className="rounded"
              id="trimSelect"
              value={selectProduct}
              onChange={handleProductChange}
            >
              <option value="allProduct">AllProduct</option>
              <option value="bag">Bag</option>
              <option value="bicycle">Bicycle</option>
              <option value="bottle">Bottle</option>
              <option value="jacket">Jacket</option>
              <option value="smartphone">Smartphone</option>
              <option value="watch">Watch</option>
            </Select>
          </div>
          <div className="">
          {selectProduct === "allProduct" ? <AllProduct /> : selectProduct === "bag" ? <Bag /> : selectProduct === "bicycle" ? <Bicycle /> : selectProduct === "bottle"? <Bottle></Bottle>: selectProduct === "jacket"? <Jacket></Jacket>: selectProduct === "smartphone"?<Smartphone></Smartphone>:selectProduct ==="watch"? <Watch></Watch>:null}
          </div>
        </DivC> 
       
       </>
    );
};

export default Category;