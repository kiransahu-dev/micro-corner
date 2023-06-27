import Products from "../../Products/Products";
import useFetch from './../../../hooks/useFetch';

const RelatedProducts = ({ productId, categoryId }) => {
    const { data } = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filter[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`);

    return (
        <div className="related-products">
            <Products headingText="Related Products" product={data} />
        </div>
    );
};

export default RelatedProducts;
