const app = {
    title: 'Visibility Toggle'
};

let showDetails = false;

const toggleShowDetails = () => {
    showDetails = !showDetails;
    render();
} 

const appRoot = document.getElementById('app')

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleShowDetails}>{!showDetails ? 'Show details': 'Hide details'}</button>
            { showDetails && <p>Here are the details!</p> }
        </div>    
    );

    ReactDOM.render(template, appRoot)    
}

render();