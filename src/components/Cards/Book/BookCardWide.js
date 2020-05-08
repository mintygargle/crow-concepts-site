import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { P } from "../../Text/text_index";
import { PrimaryBtn } from "../../Buttons/button_index";
import Image from "../../Image.styled";
import { FlexContainer as Container, Padder } from "../../Layouts/layout_index";

const BookCard = props => {
  const desc = useRef(null);

  useEffect(() => {
    console.log(desc.current);
  }, [desc]);

  return (
    <Container {...props} direction="row" align_items="flex-start">
      <Container direction="column">
        <Padder>
          <P>{props.author}</P>
          <Image src={props.image}></Image>
        </Padder>
      </Container>
      <Container direction="column" spacing="space-around">
        <Container direction="column">
          <Padder>
            <p className="" ref={desc}>
              <h1>{props.title}</h1>
              {props.description}
            </p>
            <PrimaryBtn>Buy Now</PrimaryBtn>
          </Padder>
        </Container>
      </Container>
    </Container>
  );
};

BookCard.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string
};

export default BookCard;
