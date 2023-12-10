import React from "react";
import styled from 'styled-components';

const FormInput = styled.textarea`
  width: 75%;
  height: 200px;
  padding: 12px;
  margin: 6px 0;
  margin-left: 25px;
  display: flex;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical; /* Allow vertical resizing */
`;


const Review = () => {
    var review = 101 
    console.log(review)

    return(
        <div>
        <FormInput id="longform-input" placeholder="Leave your review here..." />
      </div>
    );
  };


export default Review 

