import React, { Suspense } from "react";

const RemoteWebpack = React.lazy(() => import("remoteWebpack/App"));

function App() {
  return (
    <>
      <h1>THIS IS REACT WEBPACK HOST</h1>
      <RemoteWebpack />
    </>
  );
}

export default App;
