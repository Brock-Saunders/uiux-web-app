import * as React from "react";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";

const TextMaskAdapter = React.forwardRef(function TextMaskAdapter(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskAdapter.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function PhoneNumberInput({ value, setValue, placeholder }) {
  return (
    <FormControl>
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        slotProps={{ input: { component: TextMaskAdapter } }}
      />
    </FormControl>
  );
}
