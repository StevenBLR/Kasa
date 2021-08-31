import { Component } from 'react';
import Banner from '../../components/Banner';
import LogementGrid from '../../components/LogementGrid';

class Home extends Component {
    render() {
        return (
            <main>
                <Banner />
                <LogementGrid />
            </main>
        );
    }
}

export default Home;
