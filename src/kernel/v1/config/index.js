const config = {
    getInstance: (() => {
        let _singleton;
        let _configuration;

        return () => {
            if (!_singleton) {
                _singleton = {
                    getConfiguration: () => {
                        return _configuration;
                    },
                    setConfiguration: (newConfiguration) => {
                        _configuration = {..._configuration, ...newConfiguration};
                    },
                };
            }

            return _singleton;
        };
    })(),
};

export default config;