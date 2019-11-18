import React, { Component } from "react";
import Tab from "../components/common/tab/index";
import TabBar from "../components/common/tabbar";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Home from "../pages/home/index";
import Category from "../pages/category/index";
import Recommend from "../pages/recommend/index";
import Mine from "../pages/mine/index";
import NotFound from "../pages/notfound/index";
import ShopCar from "../pages/shopcar/index";
import Login from "../pages/login/index";
import Register from "../pages/register/index";
import List from "../pages/list/index";
import Detail from "../pages/detail/index";
//route  通过path 路径来匹配对应的组件  一个route组件就是一个路由配置
//path 路由路径
// component 路由对应的组件
//render 可以渲染一个组件
//children 子组件
// component/ render / children  选一个使用
//区别
// componet 路由组件 拥有属性 history/ location/match
// 使用render 路由属性没有 可以给组件绑定数据
// children 可以绑定数据 也有路由属性

//Switch 表示一次只渲染一个路由
// redirect 重定向
//exact 路径完全匹配 全部匹配

class LayOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabFlag: false,
      name: "靓仔",
      title: {
        "/home": "猫眼电影",
        "/recommend": "推荐",
        "/category": "分类",
        "/shopcar": "购物车",
        "/mine": "个人中心",
        "/login": "登陆",
        "/register": "注册",
        "/detail": "详情页",
        "/list": "列表",
        "/home/hot": "猫眼电影",
        "/home/comming": "猫眼电影"
      },
      arr: [
        "/recommend",
        "/category",
        "/shopcar",
        "/mine",
        "/login",
        "/register",
        "/detail",
        "/list"
      ],
      tab_bar_arr: ["/recommend", "/mine"],
      tabBarFlag: true
    };
  }
  componentDidMount() {
    this.checkTabFlag();
    this.checkTabBarFlag();
    // this.checkHomeToHot();
  }

  componentWillReceiveProps(nextProps) {
    this.checkTabFlag(nextProps);
    this.checkTabBarFlag(nextProps);
    //this.checkHomeToHot(nextProps);
  }

  checkTabFlag = nextProps => {
    const { pathname } =
      (nextProps && nextProps.location) || this.props.location;
    const f = this.state.arr.some(item => item === pathname);
    if (f) {
      this.setState({
        tabFlag: true
      });
    } else {
      this.setState({
        tabFlag: false
      });
    }
  };

  checkTabBarFlag = nextProps => {
    const { pathname } =
      (nextProps && nextProps.location) || this.props.location;
    const f = this.state.tab_bar_arr.some(item => item === pathname);
    if (f) {
      this.setState({
        tabBarFlag: false
      });
    } else {
      this.setState({
        tabBarFlag: true
      });
    }
  };

  // checkHomeToHot = nextProps => {
  //   const { pathname } =
  //     (nextProps && nextProps.location) || this.props.location;
  //   const { push, replace } =
  //     (nextProps && nextProps.location) || this.props.location;
  //   if (pathname == "/home") {
  //     push("/home/hot");
  //   }
  // };

  render() {
    const { tabFlag, title, tabBarFlag } = this.state;
    const { pathname } = this.props.location;
    return (
      <div className="layout">
        <Tab tabFlag={tabFlag} title={title[pathname]} {...this.props} />
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route path="/home" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/recommend" component={Recommend} />
          <Route path="/shopcar" component={ShopCar} />
          <Route path="/mine" component={Mine} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/list/:id" component={List} />
          <Route path="/detail/:id" component={Detail} />

          <Route component={NotFound} />
        </Switch>
        {tabBarFlag && <TabBar />}
      </div>
    );
  }
}

export default withRouter(LayOut);
