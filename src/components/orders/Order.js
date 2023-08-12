import React, {Component} from 'react'
import NumberFormat from "react-number-format";

export default class Order extends Component {
render() {
    if (this.props.isTable)
      return (
          <tr>
            <th className="py-4 align-middle"># {this.props.id}</th>
            <td className="py-4 align-middle">{this.props.address}</td>
            <td className="py-4 align-middle">{this.props.phone}</td>
            <td className="py-4 align-middle">{this.props.status}</td>
            <td className="py-4 align-middle">
              <a className="btn btn-outline-dark btn-sm" href={`/orders/${this.props.orderId}`}>Xem</a>
            </td>
            <td className="py-4 align-middle">
              <a className="btn btn-outline-dark btn-sm" href={`products/${this.props.id}`}>Sửa</a>
              <a className="btn btn-outline-dark btn-sm"
                 onClick={(e) => this.props.deleteProduct(this.props.id)}>Xóa
              </a>
            </td>
          </tr>
      )
  }
}