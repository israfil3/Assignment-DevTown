import { useEffect, useState } from "react";
import { DivA, DivP, H4, Img, P } from "../../../../ProductStyle";

const Jacket = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
       fetch('https://api.jsonbin.io/v3/b/6544e7a80574da7622c18276')
            .then(res => res.json())
            .then(data => {
                const bagProducts = data.record.filter((product) => product.category === "jacket");
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

export default Jacket;