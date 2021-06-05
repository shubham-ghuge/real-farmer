export default function Login() {
  return (
    <form className="ai-center flex-column">
      <input className="mb-2" type="email" />
      <input className="mb-2" type="password" />
      <button type="submit" className="btn-success">
        Submit
      </button>
    </form>
  );
}
