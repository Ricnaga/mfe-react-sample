import { Suspense, lazy } from "react";

const MFENextjs = lazy(() => import("@mfe-react/remote-nextjs/page"));

export function Next() {
  return (
    <Suspense fallback={<div>loading MFE...</div>}>
      <MFENextjs />
    </Suspense>
  );
}
