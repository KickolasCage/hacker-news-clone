import {PageTemplate, getStaticPropsTemplate} from '../components/PageTemplate'
import storiesType from '../utils/storiesType'

const stories = storiesType('best')

export default function Best() {
    return <PageTemplate stories={stories}/>
}

export const getStaticProps = getStaticPropsTemplate(stories)