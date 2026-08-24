import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

import { Footer } from "./components/footer";
import Header from "./components/layout/header";
import { LoadingSpinner } from "./components/loading-spinner";
import { cn } from "./lib/utils";
import Paths from "./paths";

function App() {
  return (
    <div
      className={cn([
        "flex flex-col min-h-screen bg-linear-to-b from-slate-100 via-slate-200 to-slate-100 dark:from-slate-900",
        "dark:via-slate-800 dark:to-slate-900",
      ])}
    >
      <Header className="flex-none" />

      <main className="flex-1 px-2 py-4 mx-auto container md:px-4">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route index path={Paths.HOME} Component={lazy(() => import("@/views/home-view"))} />
            <Route path={Paths.ARTIFACT_SETS} Component={lazy(() => import("@/pages/artifact-sets-page"))} />
            <Route
              path={Paths.ARTIFACT_SETS_TIER_LIST}
              Component={lazy(() => import("@/pages/artifact-sets-tier-list-page"))}
            />
            <Route
              path={Paths.ARTIFACT_SET(":artifactSetId")}
              Component={lazy(() => import("@/pages/artifact-set-page"))}
            />
            <Route path={Paths.CHARACTERS} Component={lazy(() => import("@/views/characters-view"))} />
            <Route path={Paths.CHARACTER(":characterId")} Component={lazy(() => import("@/pages/character-page"))} />
            <Route path={Paths.WEAPONS} Component={lazy(() => import("@/pages/weapons-page"))} />
            <Route path={Paths.WEAPON(":weaponId")} Component={lazy(() => import("@/pages/weapon-page"))} />
          </Routes>
        </Suspense>
      </main>

      <Footer className="flex-none" />
    </div>
  );
}

export default App;
