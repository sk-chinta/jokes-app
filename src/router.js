import React, { lazy, Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { SwitchTransition } from 'react-transition-group'

const routes = [
  // Jokes
  {
    path: '/jokes',
    Component: lazy(() => import('./pages/jokes')),
    exact: true,
  },
]

const Router = ({ history }) => {  
  return (
    <ConnectedRouter history={history}>      
        <Route
          render={state => {
            const { location } = state
            return (
              <SwitchTransition>
                  <Switch location={location}>
                    <Route exact path="/" render={() => <Redirect to="/" />} />
                    {routes.map(({ path, Component, exact }) => (
                      <Route
                        path={path}
                        key={path}
                        exact={exact}
                        render={() => {
                          return (
                            <div>
                              <Suspense fallback={null}>
                                <Component />
                              </Suspense>
                            </div>
                          )
                        }}
                      />
                    ))}                    
                  </Switch>                
              </SwitchTransition>
            )
          }}
        />      
    </ConnectedRouter>
  )
}

export default Router
