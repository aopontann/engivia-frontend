import { styled } from "@stitches/react";
import { Dispatch, memo, SetStateAction, useCallback } from "react";

type Props = {
  children: string;
  value: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};
export const Input = styled("input", {
  border: "solid 1px gainsboro",
  type: "text",
  padding: "9px 16px",
  borderRadius: "6px",
  width: "100%",
  fontSize: "14px",
});

export const InputComponent = memo((props: Props) => {
  const handleChange = useCallback(
    (e: any) => {
      props.setInputValue(() => e.target.value);
    },
    [props]
  );
  return <Input placeholder={props.children} value={props.value} onChange={handleChange} />;
});
