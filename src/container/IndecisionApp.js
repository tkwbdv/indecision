import React from 'react';
import Header from "../components/Header";
import AddOption from "../components/AddOption";
import Action from "../components/Action";
import Options from "../components/Options";
import OptionModal from "../components/OptionModal";
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Needed for screen-readers

class IndecisionApp extends React.Component {
  state = {
    options: this.props.defaultOptions,
    selectedOption: undefined,
    showModal: false
  };

  addOptionRef = React.createRef(); // to change the error state in AddOption-Component from the parent (ONLY works with Class-Components)

  // Eventhandlers ==============================================================================================
  onAddOption = (option) => {
    if (!option) { // error handling -> value is empty, or already present in state
      return "Enter valid value to add item"; // return error message to the child component -> display message in child
    } else if (this.state.options.indexOf(option) >= 0) {
      return "This options already exists";
    }

    this.setState(() => ({ options: this.state.options.concat(option) })); // concat because it creates a NEW array so we don't modify the prevState directly
  };

  onRemoveAll = () => {
    this.setState(() => ({ options: [] }));
    this.addOptionRef.current.setState(() => ({ error: undefined }));  // change error-state in add-option component
  };

  onMakeDecision = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({
      selectedOption: this.state.options[random],
      showModal: true
    }));
  };

  onRemoveOption = (optionToRemove) => {
    const newOptions = this.state.options.filter(option => option !== optionToRemove);
    this.setState(() => ({ options: newOptions }));
  };

  onCloseModal = () => {
    this.setState(() => ({ showModal: false }));
  };


  // Lifecycles ==============================================================================================
  componentDidMount = () => {
    try {
      const storedOptions = JSON.parse(localStorage.getItem("options"));
      if (storedOptions !== null) {
        this.setState(() => ({ options: storedOptions }));
      }
    } catch (e) {
      // Do nothing
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem("options", JSON.stringify(this.state.options));
    };
  };

  componentWillUnmount = () => {
    console.log("willUnmount");
  };

  // render ==============================================================================================
  render() {
    const subtitle = "Put your life in the hands of a computer";
    const hasOptions = this.state.options.length > 0;
    return (
      <div>
        <Header
          subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={hasOptions}
            onMakeDecision={this.onMakeDecision} />
          <div className="widget">
            <Options
              hasOptions={hasOptions}
              options={this.state.options}
              onRemoveAll={this.onRemoveAll}
              onRemoveOption={this.onRemoveOption} />
            <AddOption
              ref={this.addOptionRef}
              onAddOption={this.onAddOption} />
          </div>
        </div>
        <OptionModal
          onCloseModal={this.onCloseModal}
          selectedOption={this.state.selectedOption}
          showModal={this.state.showModal}
        />
      </div>
    );
  };
};

// defaults ==============================================================================================
IndecisionApp.defaultProps = {
  defaultOptions: [],
};

export default IndecisionApp;