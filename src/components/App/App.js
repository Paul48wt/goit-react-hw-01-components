import { Profile } from '../Profile/Profile';
import user from 'user.json';
import { Statistics } from '../Statistics/Statistics';
import data from 'data.json';
import friends from 'friends.json';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from 'transactions.json';
import { GlobalStyle } from '../GlobaleStyles';
import { Container, Layout } from './App.styled';

export const App = () => {
  return (
    <Layout>
      <Container>
        <Profile user={user} />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={data} />
      </Container>

      <Container>
        <FriendList friends={friends} />
      </Container>

      <Container>
        <TransactionHistory transactions={transactions} />
      </Container>

      <GlobalStyle />
    </Layout>
  );
};
