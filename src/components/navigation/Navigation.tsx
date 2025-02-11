"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/keyboards", label: "Keyboards" },
];

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        {NAV_ITEMS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={styles.navLink}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
