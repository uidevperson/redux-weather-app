import React, { Component } from 'react';
import { Sparklines, SparklinesLine} from 'react-sparklines';

export default (props) => {

    return (
      <div>
      	<Sparklines height={120} width={180} data={props.data}>
      	  <SparklinesLine color={props.color} />
      	</Sparklines>
      </div>
    );

}

// export default class Chart extends Component {
//   render() {
//     return (
//       <td>
//       	<Sparklines height={120} width={180} data={temps}>
//       	  <SparklinesLine color="pink" />
//       	</Sparklines>
//       </td>
//     );
//   }
// }