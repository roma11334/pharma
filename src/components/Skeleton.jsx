import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={250}
    viewBox="0 0 300 250"
    backgroundColor="#f2f2f2"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="113" y="160" rx="5" ry="5" width="133" height="20" /> 
    <rect x="127" y="186" rx="5" ry="5" width="103" height="21" /> 
    <rect x="126" y="214" rx="10" ry="10" width="105" height="20" /> 
    <rect x="102" y="47" rx="6" ry="6" width="155" height="103" />
  </ContentLoader>
)

export default Skeleton