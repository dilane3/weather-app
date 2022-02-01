import { StatusBar } from 'expo-status-bar';
import useFonts from './utils/loadFonts';
import AppStackNavigation from './navigation/stackNavigation';

export default function App() {
  const [fontLoaded] = useFonts()

  return (
    <>
      {
        fontLoaded ? (
          <AppStackNavigation />
        ):null
      }
      <StatusBar />
    </>
  );
}
