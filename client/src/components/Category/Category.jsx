import React from "react";
import "./Category.scss";
import Products from './../Products/Products';
import { useParams } from 'react-router-dom';
import useFetch from './../../hooks/useFetch';
const Category = () => {
    const { id } = useParams();

    const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {
                        data?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title
                    }
                    <Products innerPage={true} product={data} />
                </div>
            </div>
        </div>
    );
};

export default Category;
