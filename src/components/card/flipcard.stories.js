import { FlipCard } from './flipcard';
import './flipcard.stories.css';
export default {
  title: 'Example/FlipCard',
  component: FlipCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};
const card_cta_handler = () => {
    console.log('Explore clicked');
    document.getElementById('card').classList.add('showback');
}
const showFront = () => {
    document.getElementById('card').classList.remove('showback');
}
const front_part = () =>{
    return(
    <div>
    <div className="image_container"><img className="image" src="https://nh.rdcpix.com/3af93a1001b79cfbf6311f0e2fef2aabc-f2768235135od-w480_h360.webp"/></div>
    <div className="label_container">System Administration</div>
    <div className="cta_container"><a onClick={card_cta_handler}>Explore &gt;</a></div>
    </div>);
}
const back_part = () =>{
    return(
    <div>
        <ul className="topics_content">
            <li className="topic"><a href="www.google.com">Org Setup</a></li>
            <li className="topic">Background Jobs</li>
            <li className="topic">Password / Login Questions</li>
            <li className="topic">Users /  Features / Roles / Authorizations</li>
        </ul>
        <div className="back_container">
        <div className="back_button" onClick={showFront}><span>&#8594; </span><span>&#8592;</span></div>
        </div>
    </div>);
}

export const flip = {
  args: {
    children:[front_part(),back_part()]
  },
};
