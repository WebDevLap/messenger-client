import React, { ChangeEvent } from "react";
import { useDebounce } from "./useDebounce";

function validRules(rules: IRules, value: string) {
  for (const rule in rules) {
    const _rule = rule as keyof IRules;
    let str = "qwertyuiopasdfghjklzxcvbnm1234567890".split("");

    switch (_rule) {
      case "maxWidth":
        if (value.length > Number(rules[_rule]))
          return "Поле не должно содержать более " + rules[_rule] + " символов";
        break;
      case "minWidth":
        if (value.length < Number(rules[_rule]))
          return "Поле не должно быть менее " + rules[_rule] + " символов";
        break;
      case "isEmail":
        // eslint-disable-next-line no-case-declarations
        const regex = String(value)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
        if (!regex) return "Некорректный email!";
        break;
      case "noSpacing":
        if (value.split("").includes(" "))
          return "Поле не должно содержать пробелы";
        break;
      case "specialChars":
        let chars = rules[_rule].split("");
        let value_crs = value.split("");
        for (let src_char of value_crs) {
          if (![...chars, ...str].includes(src_char))
            return `Поле должно содержать только латиницу и символ "${chars}"`;
        }
        break;
    }
  }
  return null;
}

interface IRules {
  maxWidth?: number;
  minWidth?: number;
  isEmail?: boolean;
  noSpacing?: boolean;
  specialChars?: string;
  onlyEnglish?:boolean
}

export const useInput = (defValue: string, rules: IRules) => {
  const [value, setValue] = React.useState(defValue);
  const [isShowError, setIsShowError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("Ошибка!");
  const [isValid, setIsValid] = React.useState(false);
  const debounce = useDebounce();
  const error = isValid ? false : isShowError;

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValue(e.target.value);

    debounce(() => {
      const errorText = validRules(rules, e.target.value);
      if (errorText) {
        setErrorText(errorText);
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }, 300);
  }
  function onFocus() {
    setIsShowError(false);
  }
  function onBlur() {
    setIsShowError(true);
  }
  function clear() {
    setValue("");
    setIsShowError(false);
    setErrorText("Ошибка!");
    setIsValid(false);
  }

  return {
    value,
    handlers: { onChange, onFocus, onBlur },
    isValid,
    isShowError: error,
    errorText: error ? errorText : "",
    clear,
  };
};
