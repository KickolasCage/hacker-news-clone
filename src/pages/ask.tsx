import {PageTemplate, getStaticPropsTemplate} from '../components/PageTemplate'
import storiesType from '../utils/storiesType'

const stories = storiesType('ask')

export default function Top() {
    return <PageTemplate stories={stories}/>
}

export const getStaticProps = getStaticPropsTemplate(stories)