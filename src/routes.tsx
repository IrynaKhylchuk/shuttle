//pages
import Plans from './components/Plans/Plans'
import Features from './components/Features/Features'
import Music from './components/Music/Music'
import LogIn from './pages/LogIn/LogIn'
import SignUp from './pages/SignUp/SignUp'

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
