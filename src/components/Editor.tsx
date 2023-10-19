import { javascript } from "@codemirror/lang-javascript";
import createTheme from "@uiw/codemirror-themes";
import ReactCodeMirror from "@uiw/react-codemirror";
import React from "react";
import { useAppContext } from "../state/AppContext";

const code = `import { useEffect, useMemo, useRef } from 'react';
import { useCodeMirror } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';


const vard = () =>{
  console.log('Here we got a fond gutter')
}
`;

export default function Editor() {
  const [value, setValue] = React.useState(code);
  const { currentTheme } = useAppContext();
  const onChange = React.useCallback((val: string) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <ReactCodeMirror
      value={value}
      height="100%"
      className="h-full"
      theme={createTheme(currentTheme)}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
}
