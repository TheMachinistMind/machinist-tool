import './levelselect.css'
function Levelselect(): JSX.Element {
  return (
    <>
       <div id="levels">
            <button className="level">
              <strong>D1 - Fundamentals</strong>
              <span>What it is, what it's for, and how it connects to the bigger picture.</span>
            </button>
            <button className="level">
              <strong>D2 - Practical</strong>
              <span>I can use it, build with it, and apply it in real situations.</span>
            </button>
            <button className="level">
              <strong>D3 - University</strong>
              <span>Deep, structured understanding of how it works on the inside.</span>
            </button>
            <button className="level">
              <strong>D4 - Expert</strong>
              <span>Edge cases, serious depth, and mastery of the details.</span>
            </button>
            <button className="level">
              <strong>D5 - Research</strong>
              <span>Frontier knowledge, open questions, and cutting-edge thinking.</span>
            </button>
          </div>

          <div id="howto">
              <p><strong>How it works:</strong></p>
              <p>1.Type what you want to learn in the chat box</p>
              <p>2.Choose your difficulty level on the right (D1-D5)</p>
              <p>3.Follow the instructions in the chat</p>
              <p>4.Get answers to all your questions</p>
            </div>
    </>
  );
}

export default Levelselect