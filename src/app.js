import React from 'react';
import Header from './components/header';
import Users from './components/users';

class App extends React.Component {  

    render() {
        return (<div>
            <Header title="Users list"/>
            <main>
                <Users/>
            </main>
            <aside></aside>
        </div>)
    }
}

export default App