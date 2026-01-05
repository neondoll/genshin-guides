import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

import Footer from "@/components/footer";
import Header from "@/components/header";
import LoadingSpinner from "@/components/loading-spinner";
import { cn } from "@/lib/utils";

function App() {
  return (
    <div
      className={cn([
        "min-h-screen bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 dark:from-slate-900",
        "dark:via-slate-800 dark:to-slate-900",
      ])}
    >
      <Header />

      <main className="px-4 py-8 mx-auto container">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route index Component={lazy(() => import("@/pages/home-page"))} />
            <Route path="/artifact-sets" Component={lazy(() => import("@/pages/artifact-sets-page"))} />
            <Route path="/artifact-sets/:artifactSetId" Component={lazy(() => import("@/pages/artifact-set-page"))} />
            <Route path="/characters" Component={lazy(() => import("@/pages/characters-page"))} />
            <Route path="/characters/:characterId" Component={lazy(() => import("@/pages/character-page"))} />
            <Route path="/weapons" Component={lazy(() => import("@/pages/weapons-page"))} />
            <Route path="/weapons/:weaponId" Component={lazy(() => import("@/pages/weapon-page"))} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
