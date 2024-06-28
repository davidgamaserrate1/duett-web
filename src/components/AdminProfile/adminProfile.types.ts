export interface AdminProfileProps {
    openSettingsAdmin: boolean;
    changeSettings: (type: 'admin' | 'user') => void;
}