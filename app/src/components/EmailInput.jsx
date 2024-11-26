import * as React from "react";
import PropTypes from "prop-types";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";

export default function EmailInput({ value, setValue, placeholder }) {
  const [error, setError] = React.useState(false);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(!emailRegex.test(newValue) && newValue.length > 0);
  };

  return (
    <FormControl>
      <Input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        error={error}
        endDecorator={
          error ? <span style={{ color: "red" }}>Invalid email</span> : null
        }
      />
    </FormControl>
  );
}

EmailInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
