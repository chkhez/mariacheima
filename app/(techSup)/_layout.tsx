import { Stack,Tabs } from "expo-router";
import techsup from "./techsup";
export default function RootLayout() {
  return(
    <Tabs>
    <Tabs.Screen name="techSup" options={{ title: 'techsup' }} />
    <Tabs.Screen name="authenticate" options={{ title: 'authenticate' }} />
    <Tabs.Screen name="genrationProtocole" options={{ title: 'generationProtocole' }} />
    
    </Tabs>
  ) 
}