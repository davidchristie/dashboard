interface State {
  navigation: {
    items: Array<{
      text: string;
      to: string;
    }>;
  };
}

export const navigationSelector = (state: State) => state.navigation;
