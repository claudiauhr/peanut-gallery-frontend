import Header from "../components/Header";

const Landing = (props) => {
    return (
        <>
            <Header />
            <h1>The Peanut Gallery</h1>
            <div className="login">
            <h3>How to Play</h3>
            <fieldset>
                <legend>Create Account</legend>
                <p>Create an account to have most control of what games you play. Create your own trivia or gain access to other user generated trivia sets. Only players that register will be able to start games on command.</p>
                <legend>Select Trivia</legend>
                <p>Choose the trivia you'd like to play with from the drop down menu. Don't see a theme you'd like? Simply click 'Create Trivia' from your login screen to create your own trivia set!</p>
                <legend>Start Game!</legend>
                <p>Once the trivia set has been selected, simply click 'Start Game' to produce a private game room code.</p>
                <legend>Invite your friends!</legend>
                <p>The private game room code can be shared with up to 3 other players. Questions and answers will be shared in real-time to see who really knows the most!</p>
            </fieldset>
            </div>
        </>

    );
};

export default Landing;