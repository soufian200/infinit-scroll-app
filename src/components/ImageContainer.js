import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;
const ImgWrapper = styled.div`
    position: relative;
    
`;
const Img = styled.img`
 width: 100%;
  height: auto;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
`;
export default function ImageContianer({ imgName }) {
    console.log(`https://neoos.s3.eu-west-1.amazonaws.com/img/birds/${imgName}`)
    return <Wrapper>
        <ImgWrapper>
            <Title>{imgName}</Title>
            <Img src={`https://neoos.s3.eu-west-1.amazonaws.com/img/birds/${imgName}`} alt={imgName} />
        </ImgWrapper>
    </Wrapper>
}