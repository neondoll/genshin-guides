import { type FC } from "react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/v1/card";
import Paths from "@/paths";

const HomePage: FC = () => {
  const cards = [
    { title: "Персонажи", description: "Рекомендации по сборке всех персонажей", to: Paths.CHARACTERS },
    { title: "Оружие", description: "Рекомендации по оружию для каждого персонажа", to: Paths.WEAPONS },
    { title: "Артефакты", description: "Лучшие наборы артефактов и статы", to: Paths.ARTIFACT_SETS },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
      {cards.map(card => (
        <Card key={card.title}>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300">{card.description}</p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button asChild>
              <Link to={card.to}>Смотреть</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default HomePage;
