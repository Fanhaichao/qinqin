import React from "react";
import "./index.scss";

//react-router-dom 中导航跳转的组合给了两个
//link 用于页面跳转 但是导航不激活
//NavLink 用于页面跳转，但是导航激活
//to object string
//NavLink 有一个activeClassName 属性

import { NavLink } from "react-router-dom";

const TabBar = props => {
  const navs = [
    {
      id: 1,
      iconName: "fa-home",
      path: "/home",
      text: "首页"
    },
    {
      id: 2,
      iconName: "fa-haykal",
      path: "/recommend",
      text: "推荐"
    },
    {
      id: 3,
      iconName: "fa-map",
      path: "/category",
      text: "分类"
    },
    {
      id: 4,
      iconName: "fa-cart-plus",
      path: "/shopcar",
      text: "购物车"
    },
    {
      id: 5,
      iconName: "fa-user-circle",
      path: "/mine",
      text: "我的"
    }
  ];
  function renderNav() {
    return navs.map(item => (
      <li key={item.id}>
        <NavLink to={item.path} activeClassName="active">
          <i className={"fas " + item.iconName}></i>
          <span>{item.text}</span>
        </NavLink>
      </li>
    ));
  }
  return (
    <footer>
      <ul>{renderNav()}</ul>
    </footer>
  );
};

export default TabBar;
