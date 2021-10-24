import React from 'react';
import MyContent from './MyContent';
import profile1 from './images/dhoni.jpg';
import profile2 from './images/dravid.jpg';
import profile3 from './images/sachin.jpg';
import UserCard from './UserCard';


const App = () => {
return (
<div className ='container'> 
<UserCard> 
<MyContent 
name='vimal'
date='Friend suggestion'
picture= {profile1}
/>
</UserCard>

<UserCard>
<MyContent 
name='testing1'
date='Last seen at 12:00 pm'
picture= {profile2}
/>
</UserCard>


<UserCard>
<MyContent 
name='testing2'
date='Last seen at 11:00 pm'
picture= {profile3}
/>
</UserCard>

<UserCard>
<MyContent 
name='testing3'
date='Last seen at 08:00 pm'
picture= {profile1}
/>
</UserCard>

</div>
)
}

export default App;