import { useLocalStorageState } from 'ahooks';

const themeModel = () => {
  const [isDark, setIsDark] = useLocalStorageState('dark', {
    defaultValue: false,
  });

  return {
    isDark,
    setIsDark,
  };
};

export default themeModel;
