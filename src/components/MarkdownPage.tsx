import React from "react";
import { graphql } from "gatsby";
import Layout from "./Layout";
import Photos, { PhotoSetFragmentType } from "./Photos";
import "../../css/style.scss";

type MarkdownRemarkFragmentType = {
  markdownRemark: {
    html: string;
  };
};

type DataFormat = MarkdownRemarkFragmentType & PhotoSetFragmentType;

const MarkdownPage: React.FunctionComponent<{ data: DataFormat }> = ({
  data
}) => (
  <Layout>
    <div
      className="mb-content"
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    />
    <Photos data={data} />
  </Layout>
);

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      ...PhotoSetFragment
    }
  }
`;

export default MarkdownPage;