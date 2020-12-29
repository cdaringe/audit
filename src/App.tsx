import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AppBar from "./AppBar";
import AppDrawer from "./AppDrawer";
import AppLayout from "./AppLayout";

import { Provider as AppBarProvider } from "./contexts/app-bar";
import { Provider as GqlClientProvider } from "./contexts/gql-client";
import { useFadeInApp } from "./hooks/useFadeInApp";
import Theme from "./theme/Provider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: 1e9,
    },
  },
});

const App: FC = ({ children }) => {
  const isFadeReady = useFadeInApp();
  return (
    <Theme>
      <GqlClientProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <AppBarProvider>
            <div className="App" style={{ opacity: isFadeReady ? 1 : 0 }}>
              <AppLayout {...{ AppBar, AppDrawer }}>
                {children}
              </AppLayout>
            </div>
          </AppBarProvider>
        </QueryClientProvider>
      </GqlClientProvider>
    </Theme>
  );
};

export default App;
