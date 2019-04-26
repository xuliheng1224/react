import React from "react";
import Loadable from 'react-loadable';

const LoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    console.log(error);

    return <div>Sorry, there was a problem loading the page.</div>
  }
  return null;
};
// 按需加载
const LoadModule = (loader) => {
  return Loadable({
    loader: () => loader(),
    loading: LoadingComponent
  });
};

export default [
  {
    path: "/test",
    component: LoadModule(() => import("../module/views/test"))
  },
  {
    path: "/login",
    component: LoadModule(() => import("../module/views/login/login"))
  }]