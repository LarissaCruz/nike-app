import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    LandingPage: undefined;
    Login: undefined;
    SignIn: undefined;
    SuccessLoginScreen: undefined;
    PreferencesScreen: undefined;
    StepScreen01: undefined;
    StepScreen02: undefined;
    TabNavigator: undefined;
};

export type LandingPageNavigationProp = StackNavigationProp<RootStackParamList>;

export interface LandingPageProps {
    navigation: LandingPageNavigationProp;
}
