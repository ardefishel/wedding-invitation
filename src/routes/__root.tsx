import {
  ClientOnly,
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import usePreloadImage from "@/hooks/usePreloadImage";
import Spinner from "@/components/Spinner";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Thalita & Rama Wedding Invitation",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-grey-olive">
        <ClientOnly fallback={<Spinner />}>
          <ClientApp />
        </ClientOnly>
        <Scripts />
      </body>
    </html>
  );
}

function ClientApp() {
  const { isLoaded } = usePreloadImage();

  return isLoaded ? <Outlet /> : <Spinner />;
}
