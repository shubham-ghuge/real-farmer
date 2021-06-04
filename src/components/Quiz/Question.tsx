import "./Question.css";

function Question() {
  return (
    <section className="container">
      <div className="question">
        <h2>Which of the following is not a micro irrigation system?</h2>
        <div className="flex-column">
          <label className="option" htmlFor="1">
            <input type="radio" name="test" id="1" />
            Drip Irrigation
          </label>
          <label className="option" htmlFor="2">
            <input type="radio" name="test" id="2" />
            Sprinklers
          </label>
          <label className="option" htmlFor="3">
            <input type="radio" name="test" id="3" />
            Flow drip emitters
          </label>
          <label className="option" htmlFor="4">
            <input type="radio" name="test" id="4" />
            Surface irrigation
          </label>
        </div>
        <button className="btn-success cta">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18.17 13L15.59 15.59L17 17L22 12L17 7L15.59 8.41L18.17 11H2V13H18.17Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
export default Question;
