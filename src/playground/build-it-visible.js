class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            title: 'Visibility Toggle',
            visibility: false,
            details: 'Here are the details!'
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>{this.state.details}</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))