import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

import { P, H2 } from "../../Text/text_index"
import { SecondaryBtn, PrimaryBtn } from "../../Buttons/button_index"
import Image from "../../Image.styled"
import { FlexContainer as Container, Padder } from "../../Layouts/layout_index"
import { toggleClass } from "../../../utils/toggleClass"

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }

// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   );

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowDimensions;
// }

const BookCard = props => {
  const desc = useRef(null)
  // const { height, width } = useWindowDimensions()

  useEffect(() => {}, [desc])

  if (true) {
    return (
      <Container {...props} direction="column">
        <Padder>
          <H2>{props.title}</H2>
          <P>{props.author}</P>
          <Image src={props.image}></Image>
          <Container direction="row" spacing="space-around">
            <Container direction="column">
              <SecondaryBtn onClick={() => toggleClass(desc, "flat")}>
                Description
              </SecondaryBtn>
              <p className="flat transition" ref={desc}>
                {props.description}
              </p>
            </Container>

            <PrimaryBtn>
              <a href={props.link}>Buy Now</a>
            </PrimaryBtn>
          </Container>
        </Padder>
      </Container>
    )
  } else {
    return (
      <Container {...props} direction="row" align_items="flex-start">
        <Padder>
          <P>{props.author}</P>
          <Image src={props.image}></Image>
        </Padder>
        <Container direction="column" className="description">
          <Padder>
            <H2>{props.title}</H2>
            <p className="" ref={desc}>
              {props.description}
            </p>
            <PrimaryBtn>
              <a href={props.link}>Buy Now</a>
            </PrimaryBtn>
          </Padder>
        </Container>
      </Container>
    )
  }
}

BookCard.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
}

export default BookCard
