/*
Filename: Home.js
Contributors:
Stephen Tate - Wrote entire page.
Parker Wagner - Implemented and added targeted advertisement to Page
Ryan Cave - Designed Cappy logo.
 */

import React from "react";
import compose from "recompose/compose";

import withWidth from "@material-ui/core/withWidth/withWidth";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    marginTop: "1%"
  },
  leftColCard: {
    marginRight: "2%",
    marginTop: "1%"
  },
  textCenteredContainer: {
    position: "relative"
  },
  photoGalleryGridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)"
  },
  gridListContainer: {
    marginTop: "2%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

class Admin extends React.Component {
  render() {
    return (
    <div>Hello World!</div>
    );
  }
}

export default compose(withStyles(styles), withWidth())(Admin);
