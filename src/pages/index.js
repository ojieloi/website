import * as React from 'react';
import './index.css';

// Components
import HomePage from '../components/home/home';

// markup
const IndexPage = () => {
    return (
        <main className='main'>
            <title>Ik Ojielo - Website</title>
            {/* SEO */}
            {/* <SEO description="My personal website, with links to my social and professionl sites. From LinkedIn to Behance and GitHub." /> */}
            <HomePage />
        </main>
    )
}

export default IndexPage
