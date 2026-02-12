import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export const getRouter = () =>
  createRouter({ routeTree })

export type Router = ReturnType<typeof getRouter>
