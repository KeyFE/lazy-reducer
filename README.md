# lazy-reducer
[![Build Status](https://travis-ci.org/omodule/lazy-reducer.svg?branch=master)](https://travis-ci.org/omodule/lazy-reducer)
[![npm version](https://img.shields.io/npm/v/lazy-reducer.svg?style=flat-square)](https://www.npmjs.com/package/lazy-reducer)  
Dynamically load reducer.

## Install
```
npm install --save lazy-reducer
```
## API

### Setup
#### `lazyReducerEnhancer`
redux enhancer
```javascript
import { lazyReducerEnhancer } from 'lazy-reducer';

const rootReducerObj = {
    nameA: reducerA,
    nameB: reducerB
};
const store = createStore(combineReducers(rootReducerObj), {}, lazyReducerEnhancer(rootReducerObj));
```

### Usage
#### `<LazyReducer />`
```javascript
import { LazyReducer } from 'lazy-reducer';

<LazyReducer
    reducers={{
        nameA: someReducer1,
        nameB: someReducer2
    }}
>
    <AnyComponent />
</LazyReducer>
```

#### `withLazyReducer`
```javascript
import { withLazyReducer } from 'lazy-reducer';

class Comp extends Component {
    render() {
        <div>i am a Component wrapped by lazy reducer !</div>;
    }
}

export default withLazyReducer({
    nameA: someReducer1,
    nameB: someReducer2
})(Comp);
```

```javascript
import { withLazyReducer } from 'lazy-reducer';

@withLazyReducer({
    nameA: someReducer1,
    nameB: someReducer2
})
class Comp extends Component {
    render() {
        <div>i am a Component wrapped by lazy reducer !</div>;
    }
}

export default Comp;
```



## example
[examples](./examples)
