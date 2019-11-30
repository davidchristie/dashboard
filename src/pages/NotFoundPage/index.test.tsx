import React from "react";

import { itHasHeading } from "../../testing/content";
import { itHasNavigationLinks } from "../../testing/links";
import { describeRender } from "../../testing/render";
import NotFoundPage from ".";

describeRender("not found page", <NotFoundPage />, getResult => {
  itHasHeading("Not Found", getResult);

  itHasNavigationLinks(getResult);
});
