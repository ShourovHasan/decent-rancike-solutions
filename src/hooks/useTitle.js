import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Decent`;
    }, [title])
};

export default useTitle;