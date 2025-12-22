import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LoadingSpinner from "@/components/LoadingSpinner";

// Ленивая загрузка для оптимизации
const HomePage = lazy(() => import("@/pages/home-page"));
const ArtifactSetsPage = lazy(() => import("@/pages/artifact-sets-page"));
const ArtifactSetPage = lazy(() => import("@/pages/artifact-set-page"));
const CharactersPage = lazy(() => import("@/pages/characters-page"));
const CharacterPage = lazy(() => import("@/pages/character-page"));
const WeaponsPage = lazy(() => import("@/pages/weapons-page"));
const WeaponPage = lazy(() => import("@/pages/weapon-page"));

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
            <Route index element={<HomePage />} />
            <Route path="/artifact-sets" element={<ArtifactSetsPage />} />
            <Route path="/artifact-sets/:artifactSetId" element={<ArtifactSetPage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/characters/:characterId" element={<CharacterPage />} />
            <Route path="/weapons" element={<WeaponsPage />} />
            <Route path="/weapons/:weaponId" element={<WeaponPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
