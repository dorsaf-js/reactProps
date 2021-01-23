import React from 'react'
import{Card,Button} from 'react-bootstrap'

const Profile = ({myProfile,children,handleName}) => {
    return (
        <div>
            {myProfile.map((el,index)=>(
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={children} />
                <Card.Body>
                  <Card.Title>{el.FullName}</Card.Title>
                  <Card.Text>
                    {el.bio}
                  </Card.Text>
                  <Card.Text>
                    {el.profession}
                  </Card.Text>
                  <Button variant="primary" onClick ={()=>handleName(el.FullName)} >display profileName</Button>
                </Card.Body>
              </Card>
            ))}
        </div>
    );
};

export default Profile
