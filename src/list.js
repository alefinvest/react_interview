import React from "react";
import { Segment } from "semantic-ui-react";

class List extends React.Component {

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('This will run after 1 second!')
  //   }, 1000);
  //   //return () => clearTimeout(timer);
  // }, []);

  constructor (props) {
    super(props);
    this.state = {
      activeID: 0
    }
  }

  componentDidMount() {
    const timer = setTimeout(() => {
      this.setState(function (state, props){
        return {activeID: state.activeID + 1}})
    });
  }
  
  render() {
    const { items } = this.props;
    const activeID = this.state.activeID;
    return (
      <div>
        {items.map((item, id) => (
          <Segment
            key={id}
            vertical
            className={activeID === id ? "activeItem" : ""}
          >
            {item.name}
          </Segment>
        ))}
      </div>
    );
  }
}

export default List;
