import React from 'react';

export default class MyFilteringComponent extends React.Component {
    state = {
        initialItems: [],
        items: []
    }

    filterList = (event) => {
      let items = this.state.initialItems;
      items = items.filter((item) => {
        return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });
      this.setState({items: items});
    }

    componentWillMount = () => {
      this.setState({
          initialItems: this.props.content,
          items: this.props.content
      })
    }

    render() {
      return (
        <section className="section">
            <div className="container is-fluid">
          <form>
                <input className="input is-primary" type="text" placeholder="Search" onChange={this.filterList}/>
          </form>
          <br />
            {
                this.state.items.map(function(item) {
                    return (
                        <div className="columns">
                        <div className="column" key={item}>
                            <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                        {item}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
            
        </div>
        </section>
      );
    }
};