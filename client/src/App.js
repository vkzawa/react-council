import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import styled from 'styled-components';

import AsyncChunks from './components/utilities/AsyncLoader';
import NotFound from './components/templates/NotFound';
import SiteSidebar from './components/layout/SiteSidebar';
import MobileHeader from './components/layout/MobileHeader';
import MobileNav from './components/layout/MobileNav';
import CityNav from './components/shared/CityNav';
import Footer from './components/layout/Footer';
import LoadTemplate from './components/templates/LoadTemplate';
import api from './api';

// Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';
import {fade} from '@material-ui/core/styles/colorManipulator';


const mapStateToProps = (state) => ({
  pageList: state.api.lists.pages
});

const mapDispatchToProps = (dispatch) => ({
  loadPages: (list) => dispatch({ type: 'LOAD_PAGES_LIST', payload: list })
});

class App extends Component {

  constructor(props) {
    super(props);

    this.buildRoutes = (pages) => {

      if (this.props.pageList && this.props.pageList.length > 0) {
        return [
          <Route
            key="posts"
            render={(props)=>
              <LoadTemplate
              {...props}
              template="post"
              type="post" />
            }
            exact
            path="/post/:slug"/>,

          pages.map((route, i) => {

            // If home, set path to empty string, = '/'
            if (route.slug === 'home') {
              route.path = '';
            }

            // If template is blank, set to default
            if (route.template === '') {
              route.template = 'default'
            }

            // Default WP REST API expects /pages/ and /posts/ formatting
            // Custom post types are all singular (sigh)
            route.type = route.type === 'page'
              ? 'pages'
              : route.type === 'post'
              ? 'posts'
              : route.type;

            return (
              <Route
                render={ (props)=>
                  <LoadTemplate
                  {...props}
                  template={route.template}
                  slug={route.slug}
                  type={route.type} />
                }
                exact
                key={i}
                path={`/${decodeURIComponent(route.path)}`}/>
            )
          }),

          <Route key="not-found" component={NotFound} />
        ]
      }
    }
  }

  componentDidMount() {
    this.props.loadPages(api.Content.pageList());

    // Over-eager load code split chunks
    // Two seconds after App mounts (wait for more important resources)
    setTimeout(AsyncChunks.loadChunks, 2 * 1000);
  }

  render() {
    const theme = createMuiTheme({
      typography: {
        useNextVariants: true,
        caption: {
          lineHeight: "1.25"
        }
      },
      palette: {
        primary: {
          main: blue[900],
        },
        secondary: {
          main: yellow[900],
        },
      },
      overrides: {
        MuiBackdrop: {
          root: {
            backgroundColor: `${fade(blue[900], 0.9)}`,
          }
        }
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={`app`}>
          <Hidden smDown>
            <AppHeader> <CityNav /> </AppHeader>
          </Hidden>
          <AppLayout>
            <Hidden smDown>
              <AppLayoutAside>
                <SiteSidebar />
              </AppLayoutAside>
            </Hidden>

            <AppLayoutMain>
              <Hidden mdUp>
                <MobileHeader />
                <MobileNav />
              </Hidden>
              <Switch>
                { this.buildRoutes(this.props.pageList) }
              </Switch>
            </AppLayoutMain>
          </AppLayout>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

const AppHeader = styled.div`
`;

const AppLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

const AppLayoutMain = styled.div`
  flex-grow: 1;
  width: calc(100% - 260px);
  overflow: hidden;
`;

const AppLayoutAside = styled.div`
  background-color: white;
  box-shadow: 0 0 4px rgba(0,0,0,0.5);
  width: 260px;
  position: relative;
  z-index: 10;
`;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
