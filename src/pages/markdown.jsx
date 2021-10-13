import React, { useCallback } from "react"
import useCodemirror from "../hook/useCodemirror"

function Markdown({ onChange,  initialDoc }){
    
    const handleChange = useCallback(
        state => onChange(state.doc.toString()),
        [onChange]
    )
    
    const [refContainer, _]=useCodemirror({ initialDoc: initialDoc, onChange: handleChange})
    // useEffect(() => {
    //     if (editorView){
    //         // Do nothing for now
    //     }
    // }, [editorView])
    return <div ref={ refContainer }></div>
}

export default Markdown