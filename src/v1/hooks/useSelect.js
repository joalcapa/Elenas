import {useState} from 'react';

const useSelect = () => {
    const [isVisibleSelect, setVisibleSelect] = useState(false);

    const showSelect = () => {
        setVisibleSelect(true);
    };

    const hiddenSelect = () => {
        setVisibleSelect(false);
    };

    return {
      isVisibleSelect,
      showSelect,
      hiddenSelect,
    };
};

export default useSelect;