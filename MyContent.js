import React from 'react';

const MyContent = (props) => {

return(

<div className='picture'>
<a href="https://www.facebook.com/vimuthatzme" className='avatar'>
  <img src={props.picture} alt ="picture" />
  </a>
<div className='Author'>
<a href="https://www.facebook.com/vimuthatzme" className='Author'> 
  {props.name}
</a>

<div className='date'>
  <span className='date' /> 
  {props.date}

  </div>
  </div>
</div>

)
}

export default MyContent;