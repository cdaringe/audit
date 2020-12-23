import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AppBar from "./AppBar";
import AppDrawer from "./AppDrawer";
import AppLayout from "./AppLayout";
import ChecklistDashboard from "./ChecklistDashboard";
import { Provider as AppBarProvider } from "./contexts/app-bar";
import { useFadeInApp } from "./hooks/useFadeInApp";
import Theme from "./theme/Provider";

const queryClient = new QueryClient();

function App() {
  const isFadeReady = useFadeInApp();
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AppBarProvider>
          <div className="App" style={{ opacity: isFadeReady ? 1 : 0 }}>
            <AppLayout {...{ AppBar, AppDrawer }}>
              <ChecklistDashboard />
            </AppLayout>
          </div>
        </AppBarProvider>
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
