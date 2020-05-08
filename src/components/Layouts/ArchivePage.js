import React from "react";
import PropTypes from "prop-types";

import * as Text from "../Text/text_index";
import * as Layout from "./layout_index";

const ArchivePage = props => {
  return (
    <div className="">
      <Text.Banner>{props.title}</Text.Banner>
      <Layout.Padder>
        <Layout.FlexContainer
          direction="column"
          alignment="center"
          spacing="center"
        >
          {props.items.map(item => (
            <div className="margin">{item}</div>
          ))}
        </Layout.FlexContainer>
      </Layout.Padder>
    </div>
  );
};

ArchivePage.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};

export default ArchivePage;
