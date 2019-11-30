import React from "react";
import { itHasHeading } from "../../testing/content";
import { itHasNavigationLinks } from "../../testing/links";
import { describeRender } from "../../testing/render";
import OverviewPage from ".";

describeRender("overview page", <OverviewPage />, getResult => {
  itHasHeading("Overview", getResult);

  itHasNavigationLinks(getResult);
});
