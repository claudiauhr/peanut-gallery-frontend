import Header from "../components/Header";

const Landing = (props) => {
    return (
        <>
            <Header />
            <h1>The Peanut Gallery</h1>
            <div className="login">
            <h3>How to Play</h3>
            <fieldset>
                <legend>Socket.io</legend>
                <p>Socket is an add-on tool that assists server's in handling multiple requests at once.</p>
            </fieldset>
            </div>
        </>

    );
};

export default Landing;