import { Result } from "antd";
import React, { ReactNode } from "react";
import styles from "./index.module.less";

export default class Index extends React.Component {
  state: Readonly<{
    hasError: boolean;
    error?: Error;
  }> = {
    hasError: false,
  };

  static defaultProps = {
    message: "系统异常",
    style: {},
  };

  props: Readonly<{
    children?: ReactNode;
    message?: string;
    className?: string;
    style?: React.CSSProperties;
    errorEle?: Element;
    render?: ReactNode;
  }> = {};

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("error", error, errorInfo);
    this.setState({ error });
  }

  constructor(props: never) {
    super(props);
    this.props = props;
  }

  render() {
    if (this.state.hasError) {
      return (
        (this.props.errorEle as ReactNode) || (
          <Result
            className={[
              styles["errorInfoContainer"],
              this.props.className,
            ].join(" ")}
            status={"500"}
            title={this.props.message}
            subTitle={this.state.error?.message}
          >
            {this.props.render && this.props.render}
          </Result>
        )
      );
    }
    return this.props.children;
  }
}
