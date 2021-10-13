import React, { useCallback, useEffect } from "react"
import useCodemirror from "../hook/useCodemirror"
import style from "../style/markdown.module.css"
function Markdown(){
    const [refContainer, editorView]=useCodemirror({ initialDoc:'Hello Word', onChange:()=>{}})

    useEffect(() => {
        if (editorView){
            // Do nothing for now
        }
    }, [editorView])
    return <div className={style.gridLayout}>
        <div className={style.code} ref={refContainer}></div>
        <div className={style.preview}>Hola mundo</div>
    </div>
}

export default Markdown