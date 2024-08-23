import { Suspense, lazy } from "react";

const MFEWebpack = lazy(() => import("@mfe-react/remote-react-webpack/App"));
const MFENextjs = lazy(() => import("@mfe-react/remote-nextjs/page"));

function App() {
  return (
    <>
      <h1>THIS IS REACT WEBPACK HOST</h1>
      <Suspense fallback={<div>loading MFE...</div>}>
        <MFEWebpack />
        <MFENextjs />
      </Suspense>
    </>
  );
}

export default App;
