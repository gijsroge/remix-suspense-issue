import type { V2_MetaFunction } from "@remix-run/react";
import { Suspense, lazy } from "react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  const Component = lazy(() => import("../dynamic-component"));

  return (
    <div>
      <h1>test</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
}
