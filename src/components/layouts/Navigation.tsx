import Link from 'next/link';
import {ROUTES} from "../../constants";

interface ROUTE {
  ID: number,
  PATH: string,
  LABEL: string,
  SUBS?: Array<ROUTE>
}

export const Navigation = () => {
  return (
    <header>
      <h1>Wine and Beers</h1>
      <nav>
        <ul>
          {
            ROUTES.map((route: ROUTE) => {
              return (
                <li>
                  <Link href={route.PATH}>
                    <a>{route.LABEL}</a>
                  </Link>
                  <ul>
                    {route.SUBS && route.SUBS.map((subRoute: ROUTE) => {
                      return (
                      <li>
                        <Link href={`${route.PATH}${subRoute.PATH}`}>
                          <a>{subRoute.LABEL}</a>
                        </Link>
                      </li>
                      )
                    })}
                  </ul>
                </li>
              );
            })
          }
        </ul>
      </nav>
    </header>
  );
};


