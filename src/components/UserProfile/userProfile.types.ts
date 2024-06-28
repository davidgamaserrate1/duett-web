export interface UserProfileProps {
    openSettings: boolean;
    changeSettings: (type: 'user' | 'admin') => void;
}