import { Image, StyleSheet, Platform } from 'react-native';
import AddStudentDetails from '@/components/AddStudentDetails';
import FirebaseFetcher from '@/components/FirebaseFetcher';

export default function HomeScreen() {
  return (
    <>
    <AddStudentDetails/>
    <FirebaseFetcher/>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
