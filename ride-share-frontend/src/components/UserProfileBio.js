import React from 'react'

import { Grid, Card, Image, Icon } from 'semantic-ui-react'

const UserProfileBio = (props) => {
  if (props.user.id !== '') {
    const trips = () => {
      if (props.user.trips && props.user.trips.length > 0) {
        return props.user.trips.length
      }
      return 0
    }
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
                </Card.Content>
                <Card.Content extra>
                  <Icon name='car' />
                  {trips()} trips <br/>
                  <Icon name='star' />
                  Ratings coming soon!
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

export default UserProfileBio