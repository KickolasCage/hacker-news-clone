import {PageTemplate, getStaticPropsTemplate} from '../components/PageTemplate'
import storiesType from '../utils/storiesType'

const stories = storiesType('new')

export default function New() {
    return <PageTemplate stories={stories}/>
}

export const getStaticProps = getStaticPropsTemplate(stories)