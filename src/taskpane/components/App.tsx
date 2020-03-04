import * as React from "react";
import { Button, ButtonType } from "office-ui-fabric-react";
import Header from "./Header";
import HeroList, { HeroListItem } from "./HeroList";
import Progress from "./Progress";
/* global Button, console, Excel, Header, HeroList, HeroListItem, Progress */

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export interface AppState {
  listItems: HeroListItem[];
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: []
    };
  }

  componentDidMount() {
    this.setState({
      listItems: [
        {
          icon: "Work",
          primaryText: "Work directly in software"
        },
        {
          icon: "FileASPX",
          primaryText: "Learn each step of the way"
        },
        {
          icon: "InfoSolid",
          primaryText: "Get information on each step"
        },
        {
          icon: "SingleBookmark",
          primaryText: "You are graded on each activity"
        }

      ]
    });
  }

  click = async () => {
    try {
      await Excel.run(async context => {
        /**
         * Insert your Excel code here
         */
        const range = context.workbook.getSelectedRange();

        // Read the range address
        range.load("address");

        // Update the fill color
        range.format.fill.color = "yellow";

        await context.sync();
        console.log(`The range address was ${range.address}.`);
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { title, isOfficeInitialized } = this.props;
    console.log("App -> render -> isOfficeInitialized", isOfficeInitialized)

    if (!isOfficeInitialized) {
      return (
        <Progress title={title} logo="assets/logo-filled.png" message="Please sideload your addin to see app body." />
      );
    }

    return (
      <div className="ms-welcome">
        <Header logo="assets/logo-filled.png" title={this.props.title} message="Welcome" />
        <HeroList 
          items={this.state.listItems}>
          <Button
            className="ms-welcome__action"
            buttonType={ButtonType.hero}
            // iconProps={{ iconName: "ChevronRight" }}
            style={{backgroundColor:'#2b579a'}}
            onClick={this.click}
          >
           <span className="ms-fontColor-neutralLighterAlt">Get Started</span>
          </Button>
        </HeroList>
      </div>
    );
  }
}
