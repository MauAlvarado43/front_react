/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ScriptTag } from "seed/helpers";
import Projects from "seed/examples/components/projects/Projects";
import Tasks from "seed/examples/components/tasks/Tasks";
import Users from "seed/examples/components/users/Users";
import Sidenav from "seed/examples/components/navigation/Sidenav";
import Topnav from "seed/examples/components/navigation/Topnav";

const Home = () =>
  <div>
    <Topnav />
    <Sidenav />

    <main id="content" role="main" class="main">
    <Switch>
      <Route path="/projects" component={Projects } />
      <Route path="/tasks" component={Tasks } />
      <Route path="/users" component={Users } />
    </Switch>
      <div class="footer">
        <div class="row justify-content-between align-items-center">
          <div class="col">
            <p class="font-size-sm mb-0">
                &copy; SeedProject. <span class="d-none d-sm-inline-block">2021.</span>
             </p>
          </div>
        </div>
      </div>

    </main>

    <ScriptTag content={`
         // Builder toggle invoker
        $('.js-navbar-vertical-aside-toggle-invoker').click(function () {
          $('.js-navbar-vertical-aside-toggle-invoker i').tooltip('hide');
        });

        // Initialization of navbar vertical navigation
        var sidebar = $('.js-navbar-vertical-aside').hsSideNav();

        // Initialization of tooltip in navbar vertical menu
        $('.js-nav-tooltip-link').tooltip({ boundary: 'window' })

        $(".js-nav-tooltip-link").on("show.bs.tooltip", function(e) {
          if (!$("body").hasClass("navbar-vertical-aside-mini-mode")) {
            return false;
          }
        });

        // Initialization of unfold
        $('.js-hs-unfold-invoker').each(function () {
          var unfold = new HSUnfold($(this)).init();
        });

        // Initialization of form search
        $('.js-form-search').each(function () {
          new HSFormSearch($(this)).init()
        });
    `} />
  </div>;

Home.propTypes = {};

export default Home;