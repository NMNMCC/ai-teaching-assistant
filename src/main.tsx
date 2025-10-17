import "./cosmos.ts"
import { createRoot } from "react-dom/client"
import { App } from "./route/router.tsx"

createRoot(document.getElementById("root")!).render(<App />)
