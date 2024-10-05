import { Container } from 'reactstrap'
import DisplayList from '../features/display/DisplayList'
import SubHeader from '../components/SubHeader'

const HomePage = () => {
    return (
        <Container>
            <DisplayList />
            <SubHeader current='Home' />
        </Container>
    );
};

export default HomePage;