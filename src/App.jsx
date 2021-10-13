import { useCallback, useState } from 'react'
import './App.css'
import style from './style/markdown.module.css'
import Markdown from './pages/markdown'
import Preview from './pages/preview'

function App() {
  const [doc, setDoc] = useState('# Hello word')

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
  <div className={style.gridLayout}>
      <Markdown className={style.code}  onChange={handleDocChange} initialDoc={doc} />
      <Preview  className={style.preview} doc={doc}/>
  </div>
  )
}

export default App
