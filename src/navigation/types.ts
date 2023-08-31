import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home : undefined;
    LoginScreen : undefined;
    SignUpScreen : undefined;
    ResetPassword : undefined;
}

export type ScreenProps<RouteName extends keyof RootStackParamList> = {
    navigation : StackNavigationProp<RootStackParamList, RouteName>
}