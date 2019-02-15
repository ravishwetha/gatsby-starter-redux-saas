
import React, { Fragment, Component } from 'react'
import { Container, Box, Heading, Card } from '@magicsoup.io/stock'
import { P } from '../../styled'
import { UserPlans } from '../../components'

import { connect } from 'react-redux'
import { Account } from '../../components';

const mapStateToProps = (props) => {
  const { user } = props
  return user
}

class Profile extends Component{

  render(){
    const { user } = this.props
    const { firstName, lastName, email } = user
    
    return (
      <Fragment>
        {user && 
          <Container>
            <Heading as='h1' variant='h1'>Welcome back, {firstName} {lastName}!</Heading>
            <Card 
              variant='grey' 
              maxWidth={600} 
              p={[4,5]} 
              mb={5}
              ml={[0,5]}>
              <Heading as='h2' variant='h3'>User Data:</Heading>
              <P>
                Firstname: {firstName}<br/>
                Lastname: {lastName}<br/>
                E-Mail: {email}
              </P>
            </Card>
            <Account />
            <UserPlans />
          </Container>
          }
      </Fragment>
    )
  }
}

export default connect(mapStateToProps)(Profile)