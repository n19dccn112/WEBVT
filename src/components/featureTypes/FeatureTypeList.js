import React, {Component} from 'react'

import get from '../../api/callAPI';
import FeatureType from './FeatureType';

export default class FeatureTypeList extends Component {
  constructor(props) {
    super(props);
    //console.log('init');
    this.state = {
      featureTypes: []
    }
    //console.log(this.state);
  }

  componentDidMount() {
    get('featureTypes')
        .then(res => {
          if (res !== undefined)
              //console.log(res)
            if (res.status === 200)
              this.setState({
                featureTypes: res.data
              });
        });

  }

  render() {
    var listFeatureTypes = this.state.featureTypes
    //console.log('render');
    //console.log(this.state);

    return (

        listFeatureTypes.map((type, index) => {
          //console.log(food.name);
          return (<FeatureType
              id={type.id}
              name={type.name}
              unit={type.unit}
              checkedFeature={(e, id) => this.props.checkedFeature(e, id)}
              key={index}
              isRadio={this.props.isRadio}
              currentfeatures={this.props.currentfeatures}
          />)

        })
    );
  }
}
