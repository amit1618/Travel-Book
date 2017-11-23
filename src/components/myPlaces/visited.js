import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import VisitedCards from './visitedCards.js'
export default class VisitedCarousel extends React.Component {
 
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });
 
    setTimeout(() => {
      this.setState({
        children: [<VisitedCards />,
        <VisitedCards />,<VisitedCards />,
        <VisitedCards />,<VisitedCards />]
      })
    }, 100);
  }
 
 
  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
 
  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;
 
    return (
       <div id="visitedCarousel" class="panel panel-info">
         <div class="panel-heading">Visited</div>
          <div class="panel-body">
            <ItemsCarousel
              numberOfCards={3}
              freeScrolling={false}
              showSlither={true}
              slidesToScroll={1}
              firstAndLastGutter={true}
              gutter={10}

              enablePlaceholder
              minimumPlaceholderTime={500}
              numberOfPlaceholderItems={6}
              appShellItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

              rightChevron={'>'}
              leftChevron={'<'}
              chevronWidth={20}
              outsideChevron={true}

              springConfig={{"stiffness":180,"damping":12}}

               requestToChangeActive={this.changeActiveItem}
              activeItemIndex={activeItemIndex}
              activePosition={'center'}
              >
              {children}
            </ItemsCarousel>
          </div>
       </div>
      
    );  
  }
} 