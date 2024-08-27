import { Stack } from "expo-router";

const RootLayout = () =>{
    return(
        <Stack>
            <Stack.Screen name='index' options={{
                headerTitle: 'Home Page'
            }}/>
            <Stack.Screen name='country' options={{
                headerTitle: 'Country'
            }}/>
        </Stack>
    )
}
export default RootLayout;