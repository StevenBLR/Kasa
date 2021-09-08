import { Component } from 'react';
import Banner from '../../components/Banner';
import LogementGrid from '../../components/LogementGrid';
import bannerImg from '../../assets/bannerImg.png';

class Home extends Component {
    render() {
        return (
            <main>
                <Banner
                    message="Chez vous, partout et ailleurs"
                    image={bannerImg}
                />
                <LogementGrid />
            </main>
        );
    }
}

export default Home;
