import { useEffect } from "react";

const useSetTitle = title => {
    useEffect(() => {
        document.title = `${title} - Toys Shop Store`;
    } , [title])
};

export default useSetTitle;