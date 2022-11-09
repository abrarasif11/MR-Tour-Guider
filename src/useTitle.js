import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - MR. Tour Guider`
    },[title])
}
 export default useTitle;