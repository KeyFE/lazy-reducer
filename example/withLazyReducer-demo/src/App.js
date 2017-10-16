import React, { Component } from 'react';
import LazyCounter from './modules/lazyCounter/LazyCounter';
import SyncCounter from './modules/syncCounter/SyncCounter';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayLazyCounter: false
        };
    }
    render() {
        return (
            <div>
                <span
                    style={{
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}
                >
                    withLazyReducer demo!
                </span>
                <div style={{ margin: '12px' }}>
                    <input
                        type="button"
                        value="Display Lazy Counter"
                        onClick={() => {
                            this.setState({
                                displayLazyCounter: true
                            });
                        }}
                        style={{ backgroundColor: '#f0ffff' }}
                    />
                    <input
                        type="button"
                        value="Refresh"
                        onClick={() => {
                            window.location.reload();
                        }}
                        style={{ backgroundColor: '#f0ffff' }}
                    />
                </div>
                <SyncCounter />

                {this.state.displayLazyCounter ? <LazyCounter /> : null}
                <div style={{ backgroundColor: 'rgb(245, 245, 242)', margin: '12px' }}>
                    All state in redux store:
                    <div>
                        <pre style={{ fontWeight: 'bold' }}>
                            {JSON.stringify(this.props.allState, undefined, 2)}
                        </pre>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allState: state
    };
};

export default connect(mapStateToProps, null)(App);
