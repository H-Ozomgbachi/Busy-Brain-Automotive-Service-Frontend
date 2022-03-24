import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useField } from "formik";
import { Form, Label } from "semantic-ui-react";

interface Props {
  placeholder?: string;
  name: string;
  type?: string;
  label?: string | ReactJSXElement;
  value?: string;
  disabled?: boolean;
}

export function MyTextTexArea(props: Props) {
  const [field, meta] = useField(props.name);

  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label> {props.label} </label>
      <textarea {...field} {...props} autoComplete="off" />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
}

export default function MyTextInput(props: Props) {
  const [field, meta] = useField(props.name);

  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label> {props.label} </label>
      <input {...field} {...props} autoComplete="off" />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
}
