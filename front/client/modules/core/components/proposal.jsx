import React from 'react';
import Cover from './cover';
import ScrollReveal from 'scrollreveal';

class Proposal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerShown: false,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll(event) {
    const { scrollTop } = event.srcElement.body;
    this.setState({ scrollTop });
    const article = document.querySelector('.article');
    if ((article.offsetTop <= scrollTop) && !this.state.headerShown) {
      console.log('time to reveal');
      window.sr = ScrollReveal();
      sr.reveal(document.getElementById('header'), {
        duration: 500,
      });
      this.setState({headerShown: true});
    }
  }
  render() {
    const { proposal } = this.props;
    return (
      <div>
        <header id="header" className="header">
          <h1 className="title">{proposal.title}</h1>
        </header>
        <Cover {...proposal} />
        <div dangerouslySetInnerHTML={{__html: proposal.body}} />
      </div>
  );
  }
}

export default Proposal;
