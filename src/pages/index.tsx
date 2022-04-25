import { useUsers } from '@app/services/react-query/queries/useUsers';
import { Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import type { NextPage } from 'next';

export const Home: NextPage = () => {
  const { data } = useUsers();
  return (
    <Flex w="full" h="full">
      <Flex direction="column">
        <Text>Users:</Text>
        <UnorderedList>
          {data.map((user) => (
            <ListItem key={user.id}>
              <Text>
                {user.firstName} {user.lastName}
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Flex>
  );
};

export default Home;
