import { Empty } from "antd";
import React, { ReactNode } from "react";
import styles from "./index.less";

export default class ErrorBoundary extends React.Component {
  state: Readonly<{
    hasError: boolean;
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
  }

  constructor(props: never) {
    super(props);
    this.props = props;
  }

  render() {
    if (this.state.hasError) {
      return (
        (this.props.errorEle as ReactNode) || (
          <div
            className={[
              styles["error-info-container"],
              this.props.className,
            ].join(" ")}
          >
            <Empty style={this.props.style} description={this.props.message}>
              {this.props.render && this.props.render}
            </Empty>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
