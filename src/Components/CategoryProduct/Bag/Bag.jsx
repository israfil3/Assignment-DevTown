import { useEffect, useState } from "react";
import { DivA, DivP, H4, Img, P } from "../../../../ProductStyle";

const Bag = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('/myProduct.json')
            .then(res => res.json())
            .then(data => {
                const bagProducts = data.filter((product) => product.category === "bag");
                setProduct(bagProducts);
            });
    }, []);

    console.log(product);

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

export default Bag;
