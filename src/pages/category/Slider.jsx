import React from "react";

import { Tabs } from "antd-mobile";
import Content from "./Content";

export default class Slider extends React.Component {
  renderContent = tab => {
    return (
      <div
        style={{
          height: "100%",
          backgroundColor: "#fff",
          overflow: "auto"
        }}
      >
        {tab.floors.map((item, index) => (
          <Content {...item} key={index} />
        ))}
      </div>
    );
  };

  render() {
    const { data } = this.props;
    return (
      <Tabs
        tabs={data}
        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={11} />}
        tabBarPosition="left"
        tabDirection="vertical"
      >
        {this.renderContent}
      </Tabs>
    );
  }
}
