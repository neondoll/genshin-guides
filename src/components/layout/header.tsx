"use client";

import { Bars } from "@primeicons/react/bars";
import { Bell } from "@primeicons/react/bell";
import { Bolt } from "@primeicons/react/bolt";
import { Search } from "@primeicons/react/search";
import { Times } from "@primeicons/react/times";
import { Badge } from "@primereact/ui/badge";
import { Button } from "@primereact/ui/button";
import { Drawer } from "@primereact/ui/drawer";
import { NavigationMenu } from "@primereact/ui/navigationmenu";
import { OverlayBadge } from "@primereact/ui/overlaybadge";
import { Link } from "react-router";

import { cn } from "@/lib/utils";
import SECTIONS from "@/sections";

export default function Header({ className }: { className?: string }) {
  return (
    <header className={cn("w-full bg-surface-0 rounded-xl border border-surface-200 dark:bg-surface-900 dark:border-surface-700", className)}>
      <div className="flex gap-2 justify-between items-center px-2 py-2 mx-auto container md:px-4">
        <div className="flex gap-2 items-center">
          <Drawer.Root>
            <div className="md:hidden">
              <Drawer.Trigger
                aria-label="Открыть меню"
                as={Button}
                iconOnly
                rounded
                severity="secondary"
                variant="text"
              >
                <Bars />
              </Drawer.Trigger>
            </div>

            <Drawer.Portal>
              <Drawer.Backdrop />

              <Drawer.Popup className="w-80!">
                <Drawer.Header>
                  <Drawer.Title>Меню</Drawer.Title>

                  <Drawer.Close aria-label="Закрыть меню" as={Button} iconOnly rounded variant="text">
                    <Times />
                  </Drawer.Close>
                </Drawer.Header>

                <Drawer.Content className="p-0">
                  <ul className="flex flex-col pb-2">
                    {SECTIONS.map(s => (
                      <li key={s.label}>
                        <a className="block px-6 py-2 text-sm text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-800 cursor-pointer">
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Drawer.Content>
              </Drawer.Popup>
            </Drawer.Portal>
          </Drawer.Root>

          <div className="flex gap-3 items-center">
            <div className="flex justify-center items-center size-8 text-primary-contrast bg-linear-to-br from-primary-400 to-primary-600 rounded-lg">
              <Bolt className="size-4" />
            </div>

            <span className="hidden text-base font-semibold text-surface-900 md:block dark:text-surface-0">Genshin Impact Guides</span>
          </div>
        </div>

        <NavigationMenu className="hidden! md:flex!">
          {SECTIONS.map(s => (
            <Link className="p-menu-trigger-button" key={s.label} to={s.route}>{s.label}</Link>
          ))}
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button iconOnly variant="text" severity="secondary" rounded aria-label="Search">
            <Search />
          </Button>

          <OverlayBadge>
            <Button iconOnly variant="text" severity="secondary" rounded aria-label="Notifications">
              <Bell />
            </Button>
            <Badge severity="danger" shape="circle" size="small">
              3
            </Badge>
          </OverlayBadge>
        </div>
      </div>
    </header>
  );
}
