import './index.css';
import JokesCard from '../../components/JokesCard';
import Header from '../../components/Header';
import Container from '@material-ui/core/Container';

function Jokes() {    
    return (
        <div className="App">            
            <Header></Header>
            <Container maxWidth="sm">
                <JokesCard />
            </Container>
        </div>
    );
}

export default Jokes;
