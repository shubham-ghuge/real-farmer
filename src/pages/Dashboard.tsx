import Card from "../components/Card/Card";

export default function Dashboard() {
  return (
    <section className="quiz-grid container">
      <h3 className="heading">Welcome Back, User !</h3>
      <div className="flex-layout">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
