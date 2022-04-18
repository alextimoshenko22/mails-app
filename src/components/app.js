import React from "react";
import 'antd/dist/antd.css';
import "./app.css";
import { Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "./navbar/component";
import { MyHeader } from "./header/component";
import { Main } from "../pages/main/component";
import { MyFooter } from "./footer/component";
import { IncomingMailContainer } from "../pages/incoming-mail/container";
import { NotFound } from "../pages/not-found/component";
import { SentMailContainer } from "../pages/sent-mail/container";

const { Content } = Layout;

export const App = () => {
  return (
    <Layout className="layout">
      <MyHeader />
      <Layout>
        <Navbar />
        <Content className="content">
          <div className="siteLayoutContent">
            <Switch>
              <Redirect from="/" to="/mails" exact />
              <Route path={`/mails/sent/:id`} component={SentMailContainer} />
              <Route path={`/mails/basket/:id`} component={SentMailContainer} />
              <Route path={`/mails/:tabs/:id`} component={IncomingMailContainer} />
              <Route path='/mails' component={Main} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Content>
      </Layout>
      <MyFooter />
    </Layout>
  );
}
