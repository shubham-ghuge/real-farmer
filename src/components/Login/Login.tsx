
export default function Login(){
  return (
    <div className="d-flex">
      <div className="container jc-start flex-column ai-center m-3">
        <h1 className="mb-3">Register</h1>
        <input className="mb-2" type="email" />
        <input className="mb-2" type="password" />
        <input className="mb-2" type="password" />
        <button className="btn-success">Submit</button>
      </div>
      <div className="container flex-column ai-center m-3">
        <h1 className="mb-3">Login</h1>
        <input className="mb-2" type="email" />
        <input className="mb-2" type="password" />
        <button className="btn-success">Submit</button>
      </div>
    </div>
  );
}
