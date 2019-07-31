import { useRouter } from 'next/router';
import Header from '../components/Header'

const Page = () => {
    const router = useRouter();

    return (
        <Header>
            <h1>{router.query.title}</h1>
        </Header>

    )
};

export default Page