import React, { Suspense } from "react";

const RemoteWebpack = React.lazy(() => import("@mfe-react/remote-react-webpack/App"));

function App() {
  return (
    <>
      <h1>THIS IS REACT WEBPACK HOST</h1>
      <RemoteWebpack />
    </>
  );
}

export default App;
