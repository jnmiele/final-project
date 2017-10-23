import React from 'react'
import { connect } from 'react-redux'

import { Grid, Card, Image, Icon } from 'semantic-ui-react'

const UserProfileBio = (props) => {

  console.log(props)
  if (props.user.id != '') {
    return (
      <div id='user-bio'>
        <Grid columns={1}> 
          <div id='user-details'>
            <Grid.Column>
              <Card>
                <Image src='http://www.strangebeaver.com/wp-content/uploads/2011/01/fb/1.jpg' />
                <Card.Content>
                  <Card.Header>

                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      {props.user.email}
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    placeholder for 'user bio' ✏️
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='car' />
                    {props.user.trips.length} trips
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
          </div>
        </Grid>
      </div>
    )
  }
  return(
    <div>Loading</div>
  )	
}

// function mapStateToProps(state) {
//   return {
//     user: state.users.currentUser
//   }
// }

// export default connect(mapStateToProps)(UserProfileBio)
export default UserProfileBio