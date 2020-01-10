import { useSelector } from "react-redux";

import { navigationSelector } from "../selectors/navigation";

const useNavigation = () => {
  const { items } = useSelector(navigationSelector);
  return {
    items
  };
};

export default useNavigation;
