import { useEffect, useState } from "react";
import { DivA, DivP, Img, P } from "../../ProductStyle";
import ReactPaginate from "react-paginate";

const AllProduct = () => {
    const itemsPerPage = 10; // Number of items per page
    const [product, setProduct] = useState([]);
    const [sortCriteria, setSortCriteria] = useState("");
    const [currentPage, setCurrentPage] = useState(0); // Current page for pagination
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setSortedProducts(data); // Initialize sorted products with the original data
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
            setSortedProducts(product); // Reset to the original order when no sorting is applied
        }
    }, [sortCriteria, product]);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = sortedProducts.slice(offset, offset + itemsPerPage);

    return (
        <>
          <div className="">
          <select
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
            >
                <option value="">Sort by:</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
            </select>
          </div>
        <DivA>
            {currentItems.map((products) => (
                <DivP key={products.id}>
                    <Img src={products.photo} alt="product img" />
                    <h3>Name: {products.name}</h3>
                    <P>Description: {products.description}</P>
                    <h3>Price: {products.price}$</h3>
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
