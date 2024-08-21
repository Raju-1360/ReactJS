import { retry } from "@reduxjs/toolkit/query";
import { useGetAllProductQuery, useGetProductByIdQuery } from "../../../App/service/dummyData";

export const Query = () => {
    // Uncomment the below line to fetch all products
    // const { data, isError, isLoading } = useGetAllProductQuery();

    // Fetching a product by ID
    const { data, isError, isLoading } = useGetProductByIdQuery(2);

    console.log(data);

    if (isError) {
        return <h1>Something went wrong...</h1>;
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h1>This is RTK Query</h1>
            {/* If fetching all products, use data?.products.map */}
            {/* If fetching a single product by ID, render it directly */}
            {Array.isArray(data?.products) ? (
                data?.products.map((item, index) => (
                    <div key={index}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                ))
            ) : (
                <div>
                    <h1>{data?.title}</h1>
                    <p>{data?.description}</p>
                </div>
            )}
        </>
    );
};
