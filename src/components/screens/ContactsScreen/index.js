import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, TextInput} from 'react-native';
import dummyContacts from '../../../../assets/data/contacts.json';
function ContactsScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

  useEffect(() => {
    const newFilteredContactList = dummyContacts.filter(contacts =>
      contacts.user_display_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
    setFilteredContacts(newFilteredContactList);
  }, [searchTerm]);

  return (
    <View style={styles.page}>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="search..."
        style={styles.searchInput}
      />
      <FlatList
        data={filteredContacts}
        renderItem={({item}) => (
          <Text style={styles.contactName}>{item?.user_display_name}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 15,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  contactName: {
    fontSize: 16,
    marginVertical: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default ContactsScreen;
