import Body from './containers/Body';
import UsersPropTypes from '../../propTypes/';

const Users = () => {
    return (
        <div>
            <Body>
            user={{
    name: 'test',
    age: '23',
    avatar: {
      file: {
        id: 1,
        name: '123.jpg',
        path: '/files/1.jpg'
      }
    },
    files: [
      {
        id: 1,
        name: '123.jpg',
        path: '/files/1.jpg'
      },
      {
        id: 1,
        name: '123.jpg',
        path: '/files/1.jpg'
      }],
    addrr: {
      main: {
        line1: 'test',
        line2: 'test',
        city: 'test',
        zip: 1234
      },
      alt: {
        line1: 'test',
        line2: 'test',
        city: 'test',
        zip: 1234
      }
    },
    friends: [
      {
        name: 'test',
        age: '23',
        avatar: {
          file: {
            id: 1,
            name: '123.jpg',
            path: '/files/1.jpg'
          }
        },
        files: [
          {
            id: 1,
            name: '123.jpg',
            path: '/files/1.jpg'
          },
          {
            id: 1,
            name: '123.jpg',
            path: '/files/1.jpg'
          }],
        addrr: {
          main: {
            line1: 'test',
            line2: 'test',
            city: 'test',
            zip: 1234
          },
          alt: {
            line1: 'test',
            line2: 'test',
            city: 'test',
            zip: 1234
          }
        }
      }
    ]
  }}
            </Body>
        </div>
    )
} 

Users.propTypes = UsersPropTypes;

export default Users;