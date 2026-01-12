import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is about page</h2>
            <h3>Address: 123 Main Street</h3>
            <h4>Phone: 555-1234</h4>
            <h5>Email: info@about.com</h5>
            {/* <User name="Vishal From Function" age="22" city="Bhopal" /> */}
            <UserClass name="Vishal From Class" age="22" city="Bhopal" />
        </div>
    );
}

export default About;