import { StyleSheet } from 'react-native';

export const typography = () => {
    return StyleSheet.create({
        displayLarge: {
            fontFamily: 'Ubuntu',
            fontSize: 57,
            lineHeight: 64,
            letterSpacing: -0.25
        },
        displayMedium: {
            fontFamily: 'Ubuntu',
            fontSize: 45,
            lineHeight: 52,
            letterSpacing: 0
        },
        displaySmall: {
            fontFamily: 'Ubuntu',
            fontSize: 36,
            lineHeight: 44,
            letterSpacing: 0
        },
        headlineLarge: {
            fontFamily: 'Ubuntu',
            fontSize: 32,
            lineHeight: 40,
            letterSpacing: 0
        },
        headlineMedium: {
            fontFamily: 'Ubuntu',
            fontSize: 28,
            lineHeight: 36,
            letterSpacing: 0
        },
        headlineSmall: {
            fontFamily: 'Ubuntu',
            fontSize: 24,
            lineHeight: 32,
            letterSpacing: 0
        },
        bodyLarge: {
            fontFamily: 'Ubuntu',
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0.5
        },
        bodyMedium: {
            fontFamily: 'Ubuntu',
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0.25
        },
        bodySmall: {
            fontFamily: 'Ubuntu',
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: 0.4
        },
        labelLarge: {
            fontFamily: 'Ubuntu-Bold',
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0.1
        },
        labelMedium: {
            fontFamily: 'Ubuntu-Bold',
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: 0.5
        },
        labelSmall: {
            fontFamily: 'Ubuntu-Bold',
            fontSize: 11,
            lineHeight: 16,
            letterSpacing: 0.5
        },
        titleLarge: {
            fontFamily: 'Ubuntu-Bold',
            fontSize: 22,
            lineHeight: 28,
            letterSpacing: 0
        },
        titleMedium: {
            fontFamily: 'Ubuntu-Bold',
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0.15
        },
        titleSmall: {
            fontFamily: 'Ubuntu-Bold',
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0.1
        },
    })
}

export default { typography }