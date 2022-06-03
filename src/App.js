import UsersList from './components/UsersList';
import { Component } from 'react';

const usersDB = [
  {
    id: 1,
    firstName: 'Брендан',
    lastName: 'Айк',
    age: 60,
    creator: 'JavaScript',
    imgSrc: 'https://dic.academic.ru/pictures/wiki/files/98/beich.jpg',
  },
  {
    id: 2,
    firstName: 'Соломон',
    lastName: 'Хайкс',
    age: 39,
    creator: 'Docker',
    imgSrc:
      'https://img-0.journaldunet.com/QgT5dFY6wdgOKUTbLCZRSEK9D7w=/1240x/smart/8a786737f6544cda9b40d709b590fdf7/ccmcms-jdn/10208774-4.jpg',
  },
  {
    id: 3,
    firstName: 'Дональд',
    lastName: 'Кнут',
    age: 84,
    creator: 'Анализ алгоритмов',
    imgSrc:
      'https://wiki.spbu.ru/images/thumb/8/80/Knuth_donald.jpg/300px-Knuth_donald.jpg',
  },
  {
    id: 4,
    firstName: 'Джорданом',
    lastName: 'Валке',
    age: 43,
    creator: 'React',
    imgSrc:
      'https://thediffpodcast.com/assets/images/jordan-2c43ff762e625d49ea58424e3e74188a.jpg',
  },
  {
    id: 5,
    firstName: 'Райан',
    lastName: 'Даль',
    age: 41,
    creator: 'Node.js',
    imgSrc:
      'https://www.pvsm.ru/images/2018/06/04/intervyu-s-raianom-dalem-sozdatelem-Node-js.jpg',
  },
];

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: usersDB.map(u => ({ ...u, isSelected: false })),
    };
  }

  setUsers = newUsers => {
    this.setState({ users: newUsers });
  };

  setUsersList = newUsersList => {
    this.setState({ users: newUsersList });
  };

  render () {
    const { users } = this.state;
    return (
      <UsersList
        users={users}
        setUsers={this.setUsers}
        setUsersList={this.setUsersList}
      />
    );
  }
}

export default App;
