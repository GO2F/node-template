import React from "react";
import router from "umi/router";

export default (props: any) => {
  console.log("props.route => ", props.route);
  if (props.location.pathname.split("/").length === 2) {
    router.push(`${props.location.pathname}/list`);
    return <div />;
  } else {
    return <div>{props.children}</div>;
  }
};
