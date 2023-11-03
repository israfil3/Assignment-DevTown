import { useEffect, useState } from "react";
import { DivA, DivP, H4, Img, P } from "../../../ProductStyle";

const Bottle = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => {
                const bagProducts = data.filter((product) => product.category === "bottle");
                setProduct(bagProducts);
            });
    }, []);
    return (
        <DivA className="">
            {product.map((products) => (
                <DivP key={products.id}>
                    <Img src={products.photo} alt="product img" />
                    <h3>Name: {products.name}</h3>
                    <P>Description: {products.description}</P>
                    <H4>Price: {products.price}$</H4>
                </DivP>
            ))}
        </DivA>
    );
};

export default Bottle;