import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import AsyncChunks from "./components/utilities/AsyncLoader";
import NotFound from "./components/templates/NotFound";
import SiteSidebar from "./components/SiteSidebar";
import MobileHeader from "./components/MobileHeader";
import MobileNav from "./components/MobileNav";
import CityNav from "./components/CityNav";
import Footer from "./components/Footer";
import LoadTemplate from "./components/templates/LoadTemplate";
import api from "./api";

// Material UI
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";

const mapStateToProps = state => ({
  pageList: state.api.lists.pages,
  postCategoriesList: state.api.lists.postCategories.reduce(
    (categories, category) => {
      categories = [...categories, state.api.data.postCategories[category]];
      return categories;
    },
    []
  )
});

const mapDispatchToProps = dispatch => ({
  loadPages: pages => dispatch({ type: "LOAD_PAGES_LIST", payload: pages }),
  loadCategories: categories =>
    dispatch({ type: "LOAD_CATEGORIES_LIST", payload: categories })
});

class App extends Component {
  constructor(props) {
    super(props);

    this.buildPageRoutes = pages => {
      if (this.props.pageList && this.props.pageList.length > 0) {
        return [
          <Route
            key="posts"
            render={props => (
              <LoadTemplate {...props} template="post" type="posts" />
            )}
            exact
            path="/post/:slug"
          />,

          <Route
            key="events"
            render={props => (
              <LoadTemplate {...props} template="event" type="events" />
            )}
            exact
            path="/event/:slug"
          />,

          pages.map((route, i) => {
            // If home, set path to empty string, = '/'
            if (route.slug === "home") {
              route.path = "";
            }

            // If template is blank, set to default
            if (route.template === "") {
              route.template = "default";
            }

            // Default WP REST API expects /pages/ and /posts/ formatting
            // Custom post types are all singular (sigh)
            route.type =
              route.type === "page"
                ? "pages"
                : route.type === "post"
                ? "posts"
                : route.type;

            return (
              <Route
                render={props => (
                  <LoadTemplate
                    {...props}
                    template={route.template}
                    slug={route.slug}
                    type={route.type}
                  />
                )}
                exact
                key={i}
                path={`/${decodeURIComponent(route.path)}`}
              />
            );
          }),

          <Route key="not-found" component={NotFound} />
        ];
      }
    };

    this.buildPostCategoryRoutes = categories => {
      if (
        this.props.postCategoriesList &&
        this.props.postCategoriesList.length > 0
      ) {
        return [
          categories.map((category, i) => {
            return (
              <Route
                render={props => (
                  <PostCategory {...props} categoryId={category.id} />
                )}
                exact
                key={`postCategory-${category.id}`}
                path={`/category/${category.slug}`}
              />
            );
          })
        ];
      }
    };
  }

  componentDidMount() {
    this.props.loadPages(api.Content.pageList());
    this.props.loadCategories(api.Content.categoriesList());

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
          main: "#337ab0"
        },
        secondary: {
          main: "#18bbb0"
        }
      },
      overrides: {
        MuiBackdrop: {
          root: {
            backgroundColor: "#18bbb0"
          }
        }
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppWindow>
          <Hidden smDown>
            <AppHeader>
              {" "}
              <CityNav />{" "}
            </AppHeader>
          </Hidden>

          <AppLayout>
            <Hidden smDown>
              <AppLayoutAside>
                <SiteSidebar />
              </AppLayoutAside>
            </Hidden>

            <AppLayoutMain>
              <div className="AppLayoutMain-content">
                <Hidden mdUp>
                  <MobileHeader />
                  <MobileNav />
                </Hidden>
                <Switch>
                  {this.buildPageRoutes(this.props.pageList)}
                  {this.buildPostCategoryRoutes(this.props.postCategoriesList)}}
                  <Route key="not-found" component={NotFound} />
                </Switch>
              </div>
              <div className="AppLayoutMain-footer">
                <Footer />
              </div>
            </AppLayoutMain>
          </AppLayout>
        </AppWindow>
      </MuiThemeProvider>
    );
  }
}

const AppWindow = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AppHeader = styled.div``;

const AppLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-grow: 1;
`;

const AppLayoutMain = styled.div`
  flex-grow: 1;
  width: calc(100% - 260px);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .AppLayoutMain-content {
    flex-grow: 1;
    padding-bottom: 10px;
  }

  .AppLayoutMain-footer {
    background-color: #2e475d;
  }

  @media (max-width: 960px) {
    .AppLayoutMain-footer {
      padding-bottom: 64px;
    }
  }
`;

const AppLayoutAside = styled.div`
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  width: 260px;
  position: relative;
  z-index: 10;
`;

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
