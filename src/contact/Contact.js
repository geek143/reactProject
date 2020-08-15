import React from "react";

class Contact extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      fullname : "Enter Name",
      email : "Enter Email",
      pnumber : "Enter Phone Number",
      message : "Enter Messgae"
    }
  }

  handlename = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="w-full max-w-xs mx-auto mt-20">
        <form className="px-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md" onClick={this.handleSubmit}>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="fullname"
            >
              Full Name
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              value={this.state.fullname}
              onChange={this.handlename}
              name="fullname"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"         
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handlename}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="pnumber"
            >
              Mobile Number
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="pnumber"
              type="text"
              name="pnumber"
              value={this.state.pnumber}
              onChange={this.handlename}
            />
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea className="w-full p-3 text-gray-700 border rounded resize-y h-25 focus:outline-none focus:shadow-outline" value={this.state.message} 
            id="message"
            name="message" 
            onChange={this.handlename}></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
