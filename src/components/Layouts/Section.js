//import libraries
import styled from "styled-components"

// create a component
const ServiceSection = styled.section`
  .service-separator {
    display: none;
  }

  @media (max-width: 480px) {
    .service-container {
      flex-direction: column;
      align-items: center;
    }

    .service-separator {
      display: block;
    }

    img {
      display: none;
    }
  }
`

//make this component available to the app
export default ServiceSection
