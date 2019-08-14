// Maybe use clock later
// const clock = React.createElement('h2',{},`The current time is ${new Date().toLocaleTimeString()}`);
const heading = React.createElement('h1',{},'Help Queue');
const ticketLocation = React.createElement('h3',{},'3a');
const ticketNames = React.createElement('h3',{},'Tim and Eric');
const ticketIssue = React.createElement('h3',{},'No more brownies!');
const app = React.createElement('div',{},heading,ticketLocation,ticketNames,ticketIssue);

ReactDOM.render(
    app,
    document.getElementById('react-app-root')
);