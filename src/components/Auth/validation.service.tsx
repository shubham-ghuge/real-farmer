import { ErrorMessage } from "../ErrorMessage";

export default function checkError(
  value: string,
  type: string,
  comparator?: string
) {
  if (value === "") {
    return null;
  } else {
    switch (type) {
      case "name":
        return (
          value.length < 2 && (
            <ErrorMessage message="Name must be atleast 2 characters" />
          )
        );

      case "password":
        return (
          value.length < 6 && (
            <ErrorMessage message="Password must be at least 6 characters" />
          )
        );

      case "confirmPassword":
        return (
          value === comparator || (
            <ErrorMessage message="Passwords Does not match" />
          )
        );
      default:
        return null;
    }
  }
}
