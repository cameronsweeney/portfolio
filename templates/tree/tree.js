

function validateJsonObject(jsonString) {
    try {
        let object = JSON.parse(jsonString);
        if (typeof object === "object" && object) {
            return object;
        }
        // https://stackoverflow.com/questions/3710204/how-to-check-if-a-string-is-a-valid-json-string
        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object", 
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:

    } catch (e) {console.log(e)}
    return false;
}

function terminalValidSelector(state) {
    if (state.terminalHasValidated) {
        if (state.terminalValid) {
            return 'valid';
        }
        else { return 'invalid' }
    } else {
        return false;
    }
}


const ControlPanel = () => {
    const textbox = window.ReactRedux.useSelector( (state) => state.textbox );
    const dispatch = window.ReactRedux.useDispatch();

    return (
    <textarea
        className="control_panel"
        onBlur={ (event) => dispatch({type: 'update', payload: event.target.value})}
        defaultValue={textbox}>
    </textarea>
    );
};

const TerminalValidResult = () => {
    const terminalValidState = window.ReactRedux.useSelector(terminalValidSelector);

    if (!terminalValidState) {
        return (null);
    } else if (terminalValidState == 'valid') {
        return (
            <p className="valid">Congratulations, you are valid! &#10004;</p>
        );
    } else {
        return (
            <p className="invalid">Fuck you, you aren't valid! &#10060;</p>
        );
    }
}

const CommandLine = () => {
    const dispatch = window.ReactRedux.useDispatch();

    return (
    <div className="command_line">
        <p>Click to validate input:</p>

        <button onClick={ () => dispatch({type: 'validate'}) }>
            Validate JSON
        </button>

        <TerminalValidResult />
    </div>
    );
};


/************************************************/

const NodeMenuBar = () => {
    const dispatch = window.ReactRedux.useDispatch();

    return (
        <div>
            <button onClick={ (event) => dispatch({ type: 'delete', payload: event.target}) }>X</button>
        </div>
    );
}

const SimpleNode = (node) => {
    return (
        <div className="node">
            <NodeMenuBar />
            <h1>{node.label}</h1>
            <p>{node.content}</p>
        </div>
    );
};

const ListNode = (node) => {
    const listElements = node.content.map( (x) => <li key={x}>{x}</li> );

    return (
        <div className="list node">
            <NodeMenuBar />
            <h1>{node.label}</h1>
            <ul>{listElements}</ul>
        </div>
    )
}

const MapNode = (node) => {
    const mapElements = Object.keys(node.content).map( 
        (key) => <li key={key}>{key}: {node.content[key]}</li> 
    );

    return (
        <div className="map node">
            <NodeMenuBar />
            <h1>{node.label}</h1>
            <ul>{mapElements}</ul>
        </div>
    );
}



const TreeDisplay = () => {
    const textbox = window.ReactRedux.useSelector( (state) => state.textbox );

    return (
        <div className="tree_display">
            <SimpleNode label="h1" content={textbox} />
            <ListNode label="list" content={exampleList} />
            <MapNode label="map" content={exampleMap} />
        </div>
    );
};


