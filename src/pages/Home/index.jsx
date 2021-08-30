import { Component } from 'react';
import Banner from '../../components/Banner';
import LogementGrid from '../../components/LogementGrid';

class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <LogementGrid />
            </div>
        );
    }
}

export default Home;
