//pages
import Layout from './pages/Layout/Layout'
import Plans from './components/Plans/Plans'
import Features from './components/Features/Features'
import Music from './components/Music/Music'
import LogIn from './pages/LogIn/LogIn'
import SignUp from './pages/SignUp/SignUp'
import Reviews from './pages/Reviews/Reviews'
import Devices from './pages/Devices/Devices'
import Download from './pages/Download/Download'
import Help from './pages/Help/Help'
import Community from './pages/Community/Community'
import Backstage from './pages/Backstage/Backstage'

import { v4 as uuidv4 } from 'uuid'

export interface Route {
  path: string
  name: string
  component: JSX.Element
  layout: string
  id: string
}

export const routes: Route[] = [
  {
    path: '/plans',
    name: 'Plans',
    component: <Plans />,
    layout: '/home',
    id: uuidv4(),
  },
  {
    path: '/features',
    name: 'Features',
    component: <Features />,
    layout: '/home',
    id: uuidv4(),
  },
  {
    path: '/music',
    name: 'Music',
    component: <Music />,
    layout: '/home',
    id: uuidv4(),
  },
  {
    path: '/login',
    name: 'Log In',
    component: <LogIn />,
    layout: '/home',
    id: uuidv4(),
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: <SignUp />,
    layout: '/home',
    id: uuidv4(),
  },
]

export const footerRoutes: Route[] = [
  {
    path: '/home',
    name: 'Shuttle',
    component: <Layout />,
    layout: '',
    id: uuidv4(),
  },
  {
    path: '/plans',
    name: 'Plans',
    component: <Plans />,
    layout: '/home',
    id: uuidv4(),
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: <Reviews />,
    layout: '/home',
    id: uuidv4(),
  },
  {
    path: '/devices',
    name: 'Devices',
    component: <Devices />,
    layout: '/home',
    id: uuidv4(),
  },
  {
    path: '/download',
    name: 'Download the desktop app',
    component: <Download />,
    layout: '/home',
    id: uuidv4(),
  },
  {
    path: '/help',
    name: 'Help',
    component: <Help />,
    layout: '/home',
    id: uuidv4(),
  },
  {
    path: '/community',
    name: 'Community & feedback',
    component: <Community />,
    layout: '/home',
    id: uuidv4(),
  },
  {
    path: '/backstage',
    name: 'The Backstage',
    component: <Backstage />,
    layout: '/home',
    id: uuidv4(),
  },
]