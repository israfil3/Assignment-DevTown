import { useEffect, useState } from "react";
import { DivA, DivP, H4, Img, Label, Option, P, Select, ShortD } from "../../ProductStyle";
import ReactPaginate from "react-paginate";
import './AllProduct.css'

const AllProduct = () => {
    const itemsPerPage = 9;
    const [product, setProduct] = useState([]);
    const [sortCriteria, setSortCriteria] = useState("");
    const [currentPage, setCurrentPage] = useState(0); 
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setSortedProducts(data); 
            });
    }, []);

    useEffect(() => {
        if (sortCriteria === "name") {
            const sortedByName = [...product].sort((a, b) => a.name.localeCompare(b.name));
            setSortedProducts(sortedByName);
        } else if (sortCriteria === "price") {
            const sortedByPrice = [...product].sort((a, b) => a.price - b.price);
            setSortedProducts(sortedByPrice);
        } else {
            setSortedProducts(product);
        }
    }, [sortCriteria, product]);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = sortedProducts.slice(offset, offset + itemsPerPage);

    return (
        <>
          <ShortD>
          <Label htmlFor="trimSelect">Select Trim:</Label>
          <Select
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
            >
                <Option value="">Sort by</Option>
                <Option value="name">Name</Option>
                <Option value="price">Price</Option>
            </Select>
          </ShortD>
        <DivA>
            {currentItems.map((products) => (
                <DivP key={products.id}>
                    <Img src={products.photo} alt="product img" />
                    <h3>Name: {products.name}</h3>
                    <P>Description: {products.description}</P>
                    <H4>Price: {products.price}$</H4>
                </DivP>
            ))}

        </DivA>
         <ReactPaginate
         pageCount={Math.ceil(sortedProducts.length / itemsPerPage)}
         marginPagesDisplayed={2}
         pageRangeDisplayed={3}
         onPageChange={handlePageClick}
         containerClassName={"pagination"}
         subContainerClassName={"pages pagination"}
         activeClassName={"active"}
     />
     </>
    );
};

export default AllProduct;
