import { useState } from "react";
import ContainerInput from "@styles/ContainerInput";
import ContainerOptions from "@styles/ContainerOptions";
import Option from "@styles/Option";
import { Hint } from "react-autocomplete-hint";

interface Props {
  options: string[];
  onSelect: (option: string) => void;
}

const Input = ({ options, onSelect }: Props): JSX.Element => {
  const [text, setText] = useState("");

  const selectOption = (textInput: string) => {
    const selectedOption = options.find(
      (option) => option.toLocaleLowerCase() === textInput.toLocaleLowerCase()
    );
    if (selectedOption) {
      setText(selectedOption);
      return onSelect(selectedOption);
    }
    alert("Esta opcion no se encuentra disponible");
  };

  const onEnterKey = (key: string) => key === "Enter" && selectOption(text);

  return (
    <>
      <ContainerInput>
        <Hint options={options} allowTabFill>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => onEnterKey(e.code)}
          />
        </Hint>
        <button onClick={() => selectOption(text)}>{">"}</button>
        <ContainerOptions>
          {text !== "" &&
            options
              .filter((valueText) => valueText.indexOf(text) !== -1)
              .map(
                (optionAutocomplete) =>
                  text !== optionAutocomplete && (
                    <Option
                      key={optionAutocomplete}
                      onClick={() => setText(optionAutocomplete)}
                    >
                      {optionAutocomplete}
                    </Option>
                  )
              )}
        </ContainerOptions>
      </ContainerInput>
    </>
  );
};

export default Input;
