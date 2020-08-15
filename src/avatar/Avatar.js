import React from "react";
import AvatarList from "./AvatarList";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: true,
    };
  }

  changeTitle()
  {
     this.setState({
       title : !this.state.title
     })
  }

  render() {
    const avatarList = [
      {
        id: 1,
        name: "Lucky Dhiman",
        work: "Web Designer",
      },
      {
        id: 2,
        name: "Lucky Dhiman 1",
        work: "Web Designer 1",
      },
      {
        id: 3,
        name: "Lucky Dhiman 2",
        work: "Web Designer 2",
      },
      {
        id: 4,
        name: "Lucky Dhiman 3",
        work: "Web Designer 3",
      },
    ];
    return (
      <>
        <h1 className="mb-6 text-4xl font-bold text-center uppercase">
          {this.state.title ? "Lucky Dhiman" : "Project"}
        </h1>
        <section className="mb-6 text-gray-700 body-font">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              {avatarList.map((avatar, i) => {
                return <AvatarList key={avatar.id} name={avatar.name} work={avatar.work} />
              })}
            </div>
          </div>
        </section>
        <div className="text-center">
          <button className="px-6 py-3 text-white uppercase transition duration-300 bg-blue-900 rounded-sm focus:outline-none hover:bg-blue-800 ease" onClick={() => this.changeTitle()}>
            Submit
          </button>
        </div>
      </>
    );
  }
}

export default Avatar;
