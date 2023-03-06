import {PageTemplate, getStaticPropsTemplate} from '../components/PageTemplate'

import storiesType from '../utils/storiesType'

const stories = storiesType('top')

export default function LandingPage() {
    return <PageTemplate stories={stories}/>
}

export const getStaticProps = getStaticPropsTemplate(stories)