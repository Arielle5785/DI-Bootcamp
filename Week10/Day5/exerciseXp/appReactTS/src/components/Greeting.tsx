import { ReactElement } from "react";

interface Greeting {
    name: string;
    messageCount: number
}

const Greeting = ({ name, messageCount }: Greeting): ReactElement => {
    return (
        <div>
            <h1>Hello {name}</h1>
            <p>You have {messageCount} new messages.</p>
        </div>
    )
}
export default Greeting