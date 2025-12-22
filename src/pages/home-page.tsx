import type { FC } from "react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage: FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
      <Card className="bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border-slate-300 shadow-xl dark:from-slate-800 dark:to-slate-900 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Персонажи</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 dark:text-slate-300">Рекомендации по сборке всех персонажей</p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link to="/characters">Смотреть</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border-slate-300 shadow-xl dark:from-slate-800 dark:to-slate-900 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Оружие</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 dark:text-slate-300">Рекомендации по оружию для каждого персонажа</p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link to="/weapons">Смотреть</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border-slate-300 shadow-xl dark:from-slate-800 dark:to-slate-900 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Артефакты</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 dark:text-slate-300"> Лучшие наборы артефактов и статы</p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link to="/artifact-sets">Смотреть</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HomePage;
