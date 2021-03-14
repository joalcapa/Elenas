import config from './config';

export * from './hooks';

export const useUser = () => {
    return config.getInstance().getConfiguration().useUser();
};