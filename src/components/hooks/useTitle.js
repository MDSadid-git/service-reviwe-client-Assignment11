import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-sports photographer`;
  }, [title]);
};
export default useTitle;
