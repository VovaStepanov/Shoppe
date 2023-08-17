"use client";

import {navigationItemsWithIcons, navigationItemsWithLabels} from "@/config/navigationConfig";
import {NavigationItem} from "../NavigatonItem";
import { usePathname } from 'next/navigation';

export const Navigation = () => {
    const pathname = usePathname();

    return (
      <nav className={"h-full flex gap-16 items-center sm:gap-8 sm:flex hidden sm:block"}>
          {navigationItemsWithLabels.map(({content, url, ...other}, idx) => (
                <NavigationItem {...other} url={url} isActive={pathname === url} key={idx}>
                    {content}
                </NavigationItem>
          ))}
          <span>|</span>
          {navigationItemsWithIcons.map(({content, ...other}, idx) => (
              <NavigationItem {...other} key={idx}>
                  {content}
              </NavigationItem>
          ))}
      </nav>
    );
}