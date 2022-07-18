import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import ImageContianer from './ImageContainer';


const Wrapper = styled.div`
    background: #eee;
    display: flex;
    flex-direction: column;
    
`;

export default function Images() {
    const [imgs, setImgs] = useState([
        "100_4037.JPG",
        "100_4452.JPG",
        "100_4453.JPG",
        "100_4454.JPG",
        "100_4455.JPG",
        "100_4456.JPG",
        "100_4457.JPG",
        "100_4912.JPG",
        "100_4913.JPG",
        "100_4914.JPG",
        "100_4915.JPG",
        "100_4916.JPG",
        "100_5039.JPG",
        "100_5040.JPG",
        "100_5041.JPG",
        "100_5045.JPG",
        "100_5046.JPG",
        "100_5047.JPG",
        "100_5048.JPG",
        "100_5049.JPG",
        "100_5050.JPG",
        "100_5097.JPG",
        "100_5572.JPG",
        "100_5587.JPG",
        "100_5588.JPG",
        "100_5589.JPG",
        "100_5590.JPG",
        "100_5592.JPG",
        "100_5744.JPG",
        "100_5745.JPG",
        "100_5746.JPG",
        "100_5748.JPG",
        "100_5749.JPG",
        "100_5750.JPG",
        "100_5751.JPG",
        "100_5752.JPG",
        "100_5754.JPG",
        "100_5755.JPG",
        "100_5762.JPG",
        "D72_0400.jpg",
        "D72_0401.jpg",
        "D72_0470.jpg",
        "D72_0471.jpg",
        "D72_0472.jpg",
        "DSC01335.jpg",
        "DSC01336.jpg",
        "DSCN5784.jpg",
        "DSCN5787.jpg",
        "DSCN5790.jpg",
        "DSCN5791.jpg",
        "DSC_0502.jpg",
        "DSC_0571e.jpg",
        "DSC_0572.jpg",
        "DSC_0576e.jpg",
        "DSC_0582.jpg",
        "DSC_0583e.jpg",
        "DSC_0584.jpg",
        "DSC_0616c.jpg",
        "DSC_0617.jpg",
        "DSC_4570.jpg",
        "DSC_4571.jpg",
        "DSC_4583.jpg",
        "DSC_4584.jpg",
        "DSC_4585.jpg",
        "DSC_4586.jpg",
        "DSC_6382.jpg",
        "DSC_6383.jpg",
        "DSC_6384-2.jpg",
        "DSC_6384.jpg",
        "DSC_6385.jpg",
        "DSC_6386.jpg",
        "DSC_6387.jpg",
        "DSC_6388.jpg",
        "DSC_6389.jpg",
        "DSC_6390.jpg",
        "DSC_6391.jpg",
        "DSC_6392.jpg",
        "DSC_6393.jpg",
        "DSC_6394.jpg",
        "DSC_6395.jpg",
        "_D32_10285.jpg",
        "_D32_10303.jpg",
        "_D32_10305.jpg",
        "_D32_10306.jpg",
        "_D32_10307.jpg",
        "_D32_10308.jpg",
        "_D32_10309.jpg",
        "_D32_10578.jpg",
        "_D32_10583.jpg",
        "100_5587.JPG",
        "100_5588.JPG",
        "100_5589.JPG",
        "100_5590.JPG",
        "100_5592.JPG",
        "100_5744.JPG",
        "100_5745.JPG",
        "100_5746.JPG",
        "100_5748.JPG",
        "100_5749.JPG",
        "100_5750.JPG"
    ]);
    const per_page = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const loader = useRef(null);

    /**
     * 
     * Paginate
     */
    function paginate(per_page) {
        const cursor = (currentPage - 1) * per_page;
        return imgs.slice(0, cursor + per_page);
    }
    /**
     * 
     * Observer
     */
    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            // console.log("update current page")
            setCurrentPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    return <Wrapper>
        {paginate(per_page).map((img, i) => (
            <ImageContianer key={i} imgName={img} />
        ))}
        {/* {loading && <p>Loading...</p>} */}
        <div ref={loader} />
    </Wrapper>
}