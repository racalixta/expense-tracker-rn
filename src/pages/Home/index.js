import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movement from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: "Salário",
    value: "6500,00",
    date: "03/12/2023",
    type: 1 // balance
  },
  {
    id: 2,
    label: "Boleto conta luz",
    value: "300,00",
    date: "05/12/2023",
    type: 0 // expenses
  },
  {
    id: 3,
    label: "Pix Cliente A",
    value: "230,00",
    date: "21/12/2023",
    type: 1 // balance
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="John Dude" />

      <Balance balance="1.000,00" expense="300,00" />

      <Actions />

      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id) }
        showsVerticalScrollIndicator={false}
        renderItem={ ( {item} ) => <Movement data={item} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginHorizontal: 14,
  },
});
