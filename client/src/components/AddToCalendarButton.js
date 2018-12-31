import React from "react";
import AddToCalendarHOC from "react-add-to-calendar-hoc";

// Material UI
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class AddToCalendarButton extends React.Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.state = {
      buttonRef: null
    };
  }

  setRef(el) {
    this.setState({ buttonRef: el });
  }

  render() {
    const { buttonProps, event } = this.props;

    return (
      <AddToCalendar
        buttonProps={{ ...buttonProps, setRef: this.setRef }}
        dropdownProps={{ anchorEl: this.state.buttonRef }}
        event={event}
      />
    );
  }
}

const DropdownButton = props => {
  return (
    <Button
      aria-owns={props.isOpen ? "menu-list-grow" : undefined}
      aria-haspopup="true"
      buttonRef={props.setRef}
      {...props}
    >
      Add To Calendar
    </Button>
  );
};

const DropdownMenu = props => {
  const { isOpen, onRequestClose, anchorEl } = props;

  if (!anchorEl) return null;

  return (
    <Menu
      id="AddToCalendarDropdown"
      anchorEl={anchorEl}
      open={isOpen}
      onClose={onRequestClose}
    >
      {props.children.map(child => (
        <MenuItem
          key={child.key}
          component="a"
          href={child.props.href}
          onClick={child.props.onClick}
        >
          {child.props.children}
        </MenuItem>
      ))}
    </Menu>
  );
};

const AddToCalendar = AddToCalendarHOC(DropdownButton, DropdownMenu);

export default AddToCalendarButton;
