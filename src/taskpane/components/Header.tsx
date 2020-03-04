import * as React from "react";

export interface HeaderProps {
  title: string;
  logo: string;
  message: string;
}

export default class Header extends React.Component<HeaderProps> {
  render() {
    // const { title, logo, message } = this.props;

    return (
     <>
      <section className=" ms-bgColor-neutralLighter ms-u-fadeIn500">
      {/* <img width="90" height="90" src={logo} alt={title} title={title} /> */}
      <div className="ms-Grid-row" style={{ backgroundColor: "#2b579a" }}>
        <div
          className="ms-Grid-col ms-u-textAlignRight margin-top ms-new"
        >
          <p style={{margin: '10px'}}><span className=""> <strong> MSi </strong> </span>  Learn Excel with Msi </p>
        </div>
      </div>
    </section>
    <section className="ms-welcome__header ms-bgColor-neutralLighter ms-u-fadeIn500">
      {/* <img width="90" height="90" src={logo} alt={title} title={title} /> */}
      <div className="ms-break">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </div>
    </section>
    </>
    );
  }
}
