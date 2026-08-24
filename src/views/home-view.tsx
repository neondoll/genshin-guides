import { Button } from "@primereact/ui/button";
import { Card } from "@primereact/ui/card";
import { Link } from "react-router";

import SECTIONS from "@/sections";

export default function HomeView() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {SECTIONS.map(s => (
        <Card.Root key={s.label}>
          <Card.Body>
            <Card.Caption>
              <Card.Title>{s.label}</Card.Title>
            </Card.Caption>
            <Card.Content>
              <p>{s.desc}</p>
            </Card.Content>
            <Card.Footer>
              <Button as={Link} to={s.route}>Смотреть</Button>
            </Card.Footer>
          </Card.Body>
        </Card.Root>
      ))}
    </div>
  );
}
