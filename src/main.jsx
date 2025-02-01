import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {App} from './components/OldApp'
// import {App} from './components/NewApp'
// import {Parent} from './otherComp/ContextAPI/Parent'
import { App } from './components/useMemo/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <div>Hello World</div> */}
    {/* <OldApp /> */}
    {/* <Parent /> */}
    <App />
  </StrictMode>,
)
// 