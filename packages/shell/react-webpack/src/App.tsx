import { Suspense, lazy } from "react";

const RemoteWebpack = lazy(() => import("@mfe-react/remote-react-webpack/App"));

function App() {
  return (
    <>
      <h1>THIS IS REACT WEBPACK HOST</h1>
      <Suspense fallback={"loading RemoteWebpack..."}>
        <RemoteWebpack />
      </Suspense>
    </>
  );
}

export default App;
