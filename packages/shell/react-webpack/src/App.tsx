import { Suspense, lazy } from "react";

const RemoteWebpack = lazy(() => import("@mfe-react/remote-react-webpack/App"));
const RemoteNextjs = lazy(() => import("@mfe-react/remote-nextjs/page"));

function App() {
  return (
    <>
      <h1>THIS IS REACT WEBPACK HOST</h1>
      <Suspense fallback={"loading RemoteWebpack..."}>
        <RemoteWebpack />
      </Suspense>
      <Suspense fallback={"loading RemoteNextjs..."}>
        <RemoteNextjs />
      </Suspense>
    </>
  );
}

export default App;
