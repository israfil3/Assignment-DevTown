import { useState } from "react";
import AllProduct from "../Product/AllProduct";
import Bag from "../CategoryProduct/Bag/Bag";
import Bicycle from "../CategoryProduct/bicycle/Bicycle";
import Bottle from "../CategoryProduct/Bottle/Bottle";
import Jacket from "../CategoryProduct/Jacket/Jacket";
import Smartphone from "../CategoryProduct/smartphone/Smartphone";
import Watch from "../CategoryProduct/watch/Watch";
import { DivC, H1, Label, Option, Select, ShortC } from "../../ProductStyle";

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
       <ShortC>
            <Label htmlFor="trimSelect">Select Trim:</Label>
            <Select
              className="rounded"
              id="trimSelect"
              value={selectProduct}
              onChange={handleProductChange}
            >
              <Option
               value="allProduct">AllProduct</Option>
              <Option value="bag">Bag</Option>
              <Option value="bicycle">Bicycle</Option>
              <Option value="bottle">Bottle</Option>
              <Option value="jacket">Jacket</Option>
              <Option value="smartphone">Smartphone</Option>
              <Option value="watch">Watch</Option>
            </Select>
          </ShortC>
        <DivC>
          <div className="">
          {selectProduct === "allProduct" ? <AllProduct /> : selectProduct === "bag" ? <Bag /> : selectProduct === "bicycle" ? <Bicycle /> : selectProduct === "bottle"? <Bottle></Bottle>: selectProduct === "jacket"? <Jacket></Jacket>: selectProduct === "smartphone"?<Smartphone></Smartphone>:selectProduct ==="watch"? <Watch></Watch>:null}
          </div>
        </DivC> 
       
       </>
    );
};

export default Category;