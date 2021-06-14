function ErrorMessage({ message }: { message: string }) {
  return (
    <p className="text-danger mt-1" style={{ fontSize: ".8rem" }}>
      {message}
    </p>
  );
}
export { ErrorMessage };
