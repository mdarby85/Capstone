/*
Filename: App.js
Contributors:
Ryan Cave - Created first iteration of App.js, added routing for searching & several other pages.
Parker Wagner - Reworked some routes when authentication was finished.
Brenden Detels - Routing Functionality
 */

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Register from "./Components/RegisterModal";
import SearchRedirect from "./Components/SearchRedirect";

import FAQ from "./Pages/FAQ";
import Home from "./Pages/Home";
import Login from "./Pages/login";
import Secret from "./Pages/Secret";
import ViewPost from "./Pages/ViewPost";
import ViewUser from "./Pages/ViewUser";
import NotFound from "./Pages/NotFound";
import Callback from "./Pages/Callback";
import Sponsors from "./Pages/Sponsors";
import Capstone from "./Pages/Capstones";
import ViewCapstone from "./Pages/ViewCapstone";
import ViewSponsors from "./Pages/ViewSponsors";
import ViewASponsor from "./Pages/ViewASponsor";
import EditCapstone from "./Pages/EditCapstone";
import CreateCapstone from "./Pages/CreateCapstone";
import ViewADepartment from "./Pages/ViewADepartment";
import ViewYourCapstones from "./Pages/ViewYourCapstones";
import ViewAllDepartments from "./Pages/ViewAllDepartments";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div
            className="App"
            style={{ minHeight: "100vh", position: "relative" }}
          >
            <Header {...this.props} />
            <div style={{ paddingBottom: "140px" }}>
              <Switch>
                <Route path="/login" render={() => <Login {...this.props} />} />
                <Route
                  path="/callback"
                  render={() => <Callback {...this.props} />}
                />
                <Route
                  path="/SearchRedirect/:path/:searchTerm?"
                  component={SearchRedirect}
                />
                <Route path="/Capstones/:searchTerm?" component={Capstone} />
                <Route path="/about" component={About} />
                <Route path="/Register" component={Register} />
                <Route
                  path="/ViewCapstone/:capstoneID"
                  component={ViewCapstone}
                />
                <Route path="/ViewPost/:id" component={ViewPost} />
                <Route path="/ViewUser/:username" component={ViewUser} />
                <Route
                  path="/ViewYourCapstones/"
                  component={ViewYourCapstones}
                />
                <Route path="/Sponsors/" component={Sponsors} />
                <Route
                  path="/ViewSponsors/:searchTerm?"
                  component={ViewSponsors}
                />
                <Route path="/ViewASponsor/:id" component={ViewASponsor} />
                <Route
                  path="/ViewAllDepartments/"
                  component={ViewAllDepartments}
                />
                <Route
                  path="/ViewADepartment/:id"
                  component={ViewADepartment}
                />
                <Route path="/EditCapstone/:id" component={EditCapstone} />
                <Route path="/FAQ/" component={FAQ} />
                <Route exact path="" component={Home} />
                <Route path="*" component={NotFound} />
                {this.props.auth.isAuthenticated() && (
                  <Route
                    path="/secret"
                    render={() => <Secret {...this.props} />}
                  />
                )}
                {this.props.auth.isAuthenticated() && (
                  <Route
                    path="/CreateCapstone"
                    render={() => <CreateCapstone {...this.props} />}
                  />
                )}
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Fragment>
    );
  }
}
