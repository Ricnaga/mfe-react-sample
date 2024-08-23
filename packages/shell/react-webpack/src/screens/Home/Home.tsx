import { Suspense, lazy } from "react";

const MFEWebpack = lazy(() => import("@mfe-react/remote-react-webpack/App"));

export function Home() {
  return (
    <Suspense fallback={<div>loading MFE...</div>}>
      <MFEWebpack />
    </Suspense>
  );
}
