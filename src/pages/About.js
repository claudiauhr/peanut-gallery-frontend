import Header from "../components/Header"

function About () {
  return (
    <>
    <Header />
    <div class="login">
    <h2>Exploration into Socket.io</h2>
    <fieldset>
    <legend>Socket.io</legend>
        <p>Socket is an add-on tool that assists server's in handling multiple requests at once.</p>
    </fieldset>
    </div>
    <div class="login">
    <h2>A Group Effort</h2>
    <fieldset>
        <legend>The Team</legend>
            <ul>
                <li>Product Manager: Elaine Brossa</li>
                <li>Release Manager: Claudia Uhr</li>
                <li>Backend Lead: DustinP</li>
                <li>Frontend Lead: Mickey Mangan</li>
            </ul>
    </fieldset>
    </div>
    </>
  );
};

export default About;