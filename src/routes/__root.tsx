import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'

import appCss from '../styles.css?url'
import usePreloadImage from '@/hooks/usePreloadImage'
import Spinner from '@/components/Spinner'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Thalita & Rama Wedding Invitation',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  component: RootDocument,
})

function RootDocument() {
  const { isImageLoaded } = usePreloadImage()
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {isImageLoaded ? <Outlet /> : <Spinner />}
        <Scripts />
      </body>
    </html>
  )
}
