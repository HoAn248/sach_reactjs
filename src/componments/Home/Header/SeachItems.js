import React from 'react'
import {Link} from 'react-router-dom'
export default function SeachItems({data}) {
  return (
    <li><Link to={`/view/${data.id}`}>{ `${data.name} (tg: ${data.author}, đánh giá ${data.star} sao)`}</Link></li>
  )
}
